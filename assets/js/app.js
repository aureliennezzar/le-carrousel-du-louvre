document.addEventListener("DOMContentLoaded", function (event) {
	console.log(window.innerWidth);
	const carousel_list = document.querySelector('.carousel_list')
	const categories_list = document.querySelector('.categories_list')
	const categories_data = ["archéologie",
		"antiquité",
		"sculpture",
		"bijoux ancien",
		"dessin",
		"cadres anciens",
		"tapisserie",
		"manuscrits",
		"peintures",
		"beaux-arts anciens",
		"enluminures"]

	//Generate list for Exposants section
	for (i = 1; i <= 5; i++) {
		carousel_list.innerHTML += `
		<li class="carousel_item">
						<img class="item_link_image" src="./assets/img/image${i}.png" alt="" srcset="">
						<p class="carousel_item_title">Perrin Fine Art et Gallerie Perrin</p>
						<a href="#" class="carousel_item_link">
						découvrir les oeuvres
						<img class="item_link_arrow" src="./assets/img/long-arrow.svg"></img>
						</a>
					</li>`;
	}
	//Generate list for Categories
	for (i = 0; i < categories_data.length; i++) {
		categories_list.innerHTML += `<li class="categories_item "><a href="">${categories_data[i]}</a></li>`;
	}

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
			entry.target.classList.add('revealed')
			entry.target.classList.remove('reveal')
			observer.unobserve(entry.target)
		}
	})
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach((e)=>{
	observer.observe(e)
})


const left_arrow = document.querySelector('.gallery_larrow')
const right_arrow = document.querySelector('.gallery_rarrow')
const progress_bar = document.querySelector('.gallery_progress')
const header_images = ["header1", "header2", "header3", "header4"]
let imageCount = 0
let burgerNavOpened = false
//Update header images
const updateImages = () => {
	//Change progress bar percent
	let percent = ((imageCount + 1) * 100) / header_images.length

	//Adding offset
	if (imageCount) {
		progress_bar.style.width = `${(100 - percent) + 5}%`
	} else {
		progress_bar.style.width = `${(100 - percent) + 20}%`
	}
	for (let i = header_images.length - 1; i >= 0; i--) {
		document.querySelector(`.gallery_img${i}`).src = `./assets/img/${header_images[i]}.png`
	}
}

//Change images position in array then update
left_arrow.addEventListener('click', () => {
	if (imageCount) {
		header_images.unshift(header_images.pop())
		imageCount--
	} else {
		header_images.unshift(header_images.pop())
		imageCount = header_images.length - 1
	}
	updateImages()
})
right_arrow.addEventListener('click', () => {
	if (imageCount < 3) {
		header_images.push(header_images.shift())
		imageCount++
	} else {
		header_images.push(header_images.shift())
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
		console.log("bug close");
	} else {
		navBurgerWrap.classList.toggle("burger_animate_open")
		burgerNavOpened = !burgerNavOpened
		console.log("bug opened");
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
		console.log("need to close !");
		navBurgerWrap.classList.toggle('burger_sticky')
		burgerNavOpened = false
	}

})