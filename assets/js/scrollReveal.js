window.addEventListener('DOMContentLoaded', () => {
	// SCROLL REVEAL

	//Start Observer
	const observer = new IntersectionObserver(handleIntersect, options);
	document.querySelectorAll('.reveal').forEach((e) => {
		observer.observe(e)
	})
})
// SCROLL REVEAL
const revealRatio = .1
const options = {
	root: null,
	rootMargin: '0px',
	threshold: revealRatio
}
const handleIntersect = (entries, observer) => {
	entries.forEach((entry) => {
		//Check intersect
		if (entry.intersectionRatio > revealRatio) {
			entry.target.classList.remove('reveal')
			observer.unobserve(entry.target)
		}
	})
}
document.documentElement.classList.add('reveal-loaded')