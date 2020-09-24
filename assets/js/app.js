window.addEventListener("DOMContentLoaded", function (event) {

	const carousel_list = document.querySelector('.carousel_list')
	const categories_list = document.querySelector('.categories_list')
	const categories_data = ["archéologie",
		"antiquités",
		"sculpture",
		"bijoux anciens",
		"dessin",
		"cadres anciens",
		"tapisserie",
		"manuscrits",
		"peintures",
		"beaux-arts anciens",
		"enluminures"]

	//Generate list for Exposants section
	for (i = 1; i <= 6; i++) {
		carousel_list.innerHTML += `
		<li class="carousel_item reveal-${i}">
						<img class="item_link_image reveal-1" src="./assets/img/image${i}.png" alt="" srcset="">
						<p class="carousel_item_title reveal-2">Perrin Fine Art et Galerie Perrin</p>
						<a href="#" class="carousel_item_link reveal-3">
						découvrir les oeuvres
						<img class="item_link_arrow" src="./assets/img/long-arrow.svg"></img>
						</a>
					</li>`;
	}

	//CHECK IF RENDER ON TOUCH SCREEN OR DESKTOP
	const isMobileOrTablet = () => {
		let check = false;
		(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	};
	window.addEventListener('resize', () => {
		if (isMobileOrTablet()) {
			const carouselGrab = document.querySelector('.carousel_grab_wrap')
			const carouselDiv = document.querySelector('.carousel')
			const carousel_list = document.querySelector('.carousel_list')
			carouselDiv.style.width = "100%"
			carousel_list.style.left = "0"
			carouselGrab.style.display = "none"
			if (window.innerWidth < 800) {
				carousel_list.style.padding = "0 30px"
				carousel_list.style.position = "static"
				carousel_list.style.overflowX = "auto"
				carousel_list.style.overflowY = "hidden"
				carouselDiv.style.height = "auto"
				carouselDiv.style.padding = "10px 0"
			} else {
				carousel_list.style.position = "absolute"
				carouselDiv.style.height = "400px"
				carousel_list.style.overflowX = "auto"
				carousel_list.style.overflowY = "hidden"
			}
		}
	})
	//Generate list for Categories
	for (i = 0; i < categories_data.length; i++) {
		categories_list.innerHTML += `<li class="categories_item reveal-${i + 1}"><a href="">${categories_data[i]}</a></li>`;
	}
	const observer = new IntersectionObserver(handleIntersect, options);

	document.querySelectorAll('.reveal').forEach((e) => {
		observer.observe(e)
	})
});
const revealRatio = .1
// SCROLL REVEAL
const options = {
	root: null,
	rootMargin: '0px',
	threshold: revealRatio
}
const handleIntersect = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > revealRatio) {
			// entry.target.classList.add('revealed')
			entry.target.classList.remove('reveal')
			observer.unobserve(entry.target)
		}
	})
}
document.documentElement.classList.add('reveal-loaded')

//GALLERY
const left_arrow = document.querySelector('.gallery_larrow')
const right_arrow = document.querySelector('.gallery_rarrow')
const progress_bar = document.querySelector('.gallery_progress')
const gallery_image = document.querySelector('.gallery_img')
const likes_buttons = document.querySelectorAll('[class*="gallery_like"]')
const likes_images = document.querySelectorAll('.like_image')
const header_images = ["header1", "header2", "header3", "header4"]
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
let imageCount = 3
let burgerNavOpened = false
//Update header images
const updateImages = () => {
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
		document.querySelector(`.gallery_img${i}`).src = `./assets/img/${header_images[i]}.png`
	}
}


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

//Nav burger
const navBurger = document.querySelector('.header_nav_burger')
const navBurgerWrap = document.querySelector('.burger_menus_wrap')
const burgerAnimation = document.querySelector('.burger_animate')
navBurger.addEventListener('click', () => {
	if (burgerNavOpened) {
		burgerNavOpened = !burgerNavOpened
		navBurgerWrap.classList.toggle("burger_animate_close")
	} else {
		navBurgerWrap.classList.toggle("burger_animate_open")
		burgerNavOpened = !burgerNavOpened
	}
})
navBurgerWrap.addEventListener('animationend', () => {
	burgerNavOpened
		? navBurgerWrap.classList.toggle("burger_animate_open")
		: navBurgerWrap.classList.toggle("burger_animate_close")
	navBurgerWrap.classList.toggle('burger_sticky')
})
window.addEventListener('resize', () => {
	if (window.innerWidth > 1100 && burgerNavOpened) {
		navBurgerWrap.classList.toggle('burger_sticky')
		burgerNavOpened = false
	}

})

//CAROUSEL GRAB
const carouselList = document.querySelector('.carousel_list')
const grabItem = document.querySelector('.carousel_grab_wrap')
const grabSection = document.querySelector('.exposants')
let grabItemsCoords = grabItem.getBoundingClientRect()

const updateCursor = () => {
	if (isGrabbing) {
		grabItem.style.background = "#fcf9e5"
		grabItem.style.opacity = "0.7"

		grabItem.style.cursor = "grabbing"
		document.body.style.cursor = "grabbing"
		carouselList.style.userSelect = "none"
	} else {
		carouselList.style.userSelect = "auto"
		grabItem.style.background = "#fff9c0"
		grabItem.style.opacity = "0.85"
		grabItem.style.cursor = "grab"
		document.body.style.cursor = "default"
	}
}
let isGrabbing = false
let mouseSide = 0
let grabIncrease = 0
let intervalStarted = false
let intervalID = null
let offset = 0
const maxSpeed = 40
window.addEventListener('mousemove', (e) => {
	const grabMiddle = grabItemsCoords.x + (grabItemsCoords.width / 2)
	const distanceFromGrab = Math.abs(grabMiddle - e.clientX)
	const rightSideDistance = window.innerWidth - grabMiddle
	const grabVelocity = distanceFromGrab / rightSideDistance
	grabIncrease = Math.round(maxSpeed * grabVelocity)
	if (grabIncrease > 60) grabIncrease = 50
	if (e.clientX < grabMiddle) {
		mouseSide = 0
	} else {
		mouseSide = 1
	}
	if (isGrabbing) {
		if (!intervalStarted) {
			const carouselDiv = document.querySelector('.carousel')
			clearInterval(intervalID);
			intervalID = setInterval(() => {
				if (mouseSide) {
					if (carouselList.getBoundingClientRect().right + 30 > window.innerWidth) {
						console.log(grabIncrease);
						offset -= grabIncrease
					}
				} else {
					if (window.innerWidth > 800) {
						if (carouselList.getBoundingClientRect().left < carouselDiv.getBoundingClientRect().left - 95) {
							console.log(grabIncrease)
							offset += grabIncrease
						}
					} else {
						if (carouselList.getBoundingClientRect().left - 25 < 0) {
							console.log(grabIncrease)
							offset += grabIncrease
						}
					}
				}
				carouselList.style.transform = `translateX(${offset}px)`

			}, 30)
			intervalStarted = true
		}
	}


})
window.addEventListener('mouseup', () => {
	isGrabbing = false
	intervalStarted = false
	clearInterval(intervalID);
	updateCursor()
})
grabItem.addEventListener('mousedown', () => {
	grabItemsCoords = grabItem.getBoundingClientRect()
	isGrabbing = true
	updateCursor()
})
grabItem.addEventListener('mouseup', () => {
	isGrabbing = false
	intervalStarted = false
	clearInterval(intervalID);
	updateCursor()
})

