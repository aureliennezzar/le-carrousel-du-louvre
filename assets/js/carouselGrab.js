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

//Listen for mouse move
window.addEventListener('mousemove', (e) => {
	const grabMiddle = grabItemsCoords.x + (grabItemsCoords.width / 2)
	const distanceFromGrab = Math.abs(grabMiddle - e.clientX)
	const rightSideDistance = window.innerWidth - grabMiddle
	const grabVelocity = distanceFromGrab / rightSideDistance
	grabIncrease = Math.round(maxSpeed * grabVelocity)

	//set over maxspeed
	if (grabIncrease > 60) grabIncrease = 50

	//Check if mouse is left or right from the grab
	if (e.clientX < grabMiddle) {
		mouseSide = 0
	} else {
		mouseSide = 1
	}

	//Check if grabbing 
	if (isGrabbing) {
		if (!intervalStarted) {
			const carouselDiv = document.querySelector('.carousel')
			//Reset animation
			clearInterval(intervalID);
			//Start Animation
			intervalID = setInterval(() => {
				if (mouseSide) {

					//MOUSE RIGHT SIDE
					if (carouselList.getBoundingClientRect().right + 30 > window.innerWidth) {
						offset -= grabIncrease
					}
				} else {
					//MOUSE LEFT SIDE
					if (window.innerWidth > 800) {
						if (carouselList.getBoundingClientRect().left < carouselDiv.getBoundingClientRect().left - 95) {
							offset += grabIncrease
						}
					} else {
						if (carouselList.getBoundingClientRect().left - 25 < 0) {
							offset += grabIncrease
						}
					}
				}
				//Move carousel
				carouselList.style.transform = `translateX(${offset}px)`

			}, 30)
			intervalStarted = true
		}
	}


})

//Grab events
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