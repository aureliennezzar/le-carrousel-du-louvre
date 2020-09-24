let burgerNavOpened = false
//Nav burger
const navBurger = document.querySelector('.header_nav_burger')
const navBurgerWrap = document.querySelector('.burger_menus_wrap')
const burgerAnimation = document.querySelector('.burger_animate')
// const exposantsLinks = document.querySelectorAll('.exposantsLink')

// for (link of exposantsLinks) {
// 	link.onclick = () => {
// 		window.scrollY-=110
// 		const exposantSection = document.querySelector(".exposants")
// 		exposantSection.scrollIntoView()
// 	}
// }
//Listen for click on burger
navBurger.addEventListener('click', () => {
	if (burgerNavOpened) {
		burgerNavOpened = !burgerNavOpened
		navBurgerWrap.classList.toggle("burger_animate_close")
	} else {
		navBurgerWrap.classList.toggle("burger_animate_open")
		burgerNavOpened = !burgerNavOpened
	}
})
//If animation end change style
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