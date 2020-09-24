window.addEventListener("DOMContentLoaded", () => {
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
	for (i = 1; i <= 5; i++) {
		carousel_list.innerHTML += `
		<li class="carousel_item reveal-${i}">
						<img class="item_link_image reveal-1" src="./assets/img/carousel${i}.jpeg" alt="Exposant image" srcset="">
						<p class="carousel_item_title reveal-2">Perrin Fine Art et Galerie Perrin</p>
						<a href="#" class="carousel_item_link reveal-3" aria-label="See more">
						découvrir les oeuvres
						<img class="item_link_arrow" src="./assets/img/long-arrow.svg" alt="left arrow"></img>
						</a>
					</li>`;
	}

	//Generate list for Categories
	for (i = 0; i < categories_data.length; i++) {
		categories_list.innerHTML += `<li class="categories_item"><a href="">${categories_data[i]}</a></li>`;
	}

});





