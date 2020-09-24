//GALLERY
const left_arrow = document.querySelector('.gallery_larrow')
const right_arrow = document.querySelector('.gallery_rarrow')
const progress_bar = document.querySelector('.gallery_progress')
const gallery_image = document.querySelector('.gallery_img')
const galleryImageDesc = document.querySelector('.gallery_image_title')
const galleryImageMeta = document.querySelector('.gallery_image_meta')
const likes_buttons = document.querySelectorAll('[class*="gallery_like"]')
const likes_images = document.querySelectorAll('.like_image')
const header_images = ["header1", "header2", "header3", "header4"]
//Header data
const headerJson = {
	header1: {
		desc: "Venise, le môle à l'entrée du grand canal et la Salute.",
		meta: "eugene boudin, 1885 / galerie perrotin"
	},
	header2: {
		desc: "Venise, le môle à l'entrée du grand canal et la Salute.",
		meta: "eugene boudin, 1885 / galerie perrotin"
	},
	header3: {
		desc: "Venise, le môle à l'entrée du grand canal et la Salute.",
		meta: "eugene boudin, 1885 / galerie perrotin"
	},
	header4: {
		desc: "Venise, le môle à l'entrée du grand canal et la Salute.",
		meta: "eugene boudin, 1885 / galerie perrotin"
	},
}
//GALLERY IMAGE PARRALAX
window.addEventListener('scroll', function (e) {
	gallery_image.style.top = `${-30 + window.scrollY / 6}px`
})

//If likes data null initialize new one
if (localStorage.getItem('images_liked') === null) localStorage.setItem('images_liked', JSON.stringify({
	header1: false,
	header2: false,
	header3: false,
	header4: false
}))

let imagesLiked = JSON.parse(localStorage.getItem('images_liked'))
let liked = !imagesLiked[header_images[0]]
const updateLikes = () => {
	if (liked) {
		for (image of likes_images) image.src = './assets/img/hearth-empty.png'
	} else {
		for (image of likes_images) image.src = './assets/img/hearth-filled.png'
	}
}
//SET LIKE
updateLikes()
for (item of likes_buttons) {
	item.onclick = () => {
		localStorage.setItem('images_liked', JSON.stringify({
			...imagesLiked,
			[header_images[0]]: !imagesLiked[header_images[0]]
		}))
		imagesLiked = JSON.parse(localStorage.getItem('images_liked'))
		liked = !liked
		updateLikes()
	}
}
gallery_image.addEventListener('animationend', () => {
	gallery_image.classList.remove('animate_images')
})
//Update header images
let imageCount = 3
const updateImages = () => {
	console.log()
	gallery_image.classList.add('animate_images')
	imagesLiked[header_images[0]] ? liked = false : liked = true
	updateLikes()
	//Change progress bar percent
	let percent = ((imageCount + 1) * 100) / header_images.length

	//Adding offset
	if (imageCount) {
		progress_bar.style.width = `${(100 - percent) + 5}%`
	} else {
		progress_bar.style.width = `${(100 - percent) + 20}%`
	}
	for (let i = 0; i < header_images.length; i++) {
		document.querySelector(`.gallery_img${i}`).src = `./assets/img/${header_images[i]}.jpeg`
	}

	//Changing DESC and IMAGE FOOTER
	galleryImageDesc.innerHTML = headerJson[header_images[0]].desc
	galleryImageMeta.innerHTML = headerJson[header_images[0]].meta
}
//SET IMAGES AND IMAGE FOOTER
updateImages()

// Change images position in array then update
right_arrow.addEventListener('click', () => {
	if (imageCount) {
		header_images.push(header_images.shift())
		imageCount--
	} else {
		header_images.push(header_images.shift())
		imageCount = header_images.length - 1
	}
	updateImages()
})
left_arrow.addEventListener('click', () => {
	if (imageCount < 3) {
		header_images.unshift(header_images.pop())
		imageCount++
	} else {
		header_images.unshift(header_images.pop())
		imageCount = 0

	}
	updateImages()
})
