// import Swiper JS
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function sliders() {

	try {

		const offerSlider = new Swiper('.swiper-offers', {
			modules: [Navigation],
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			// Navigation arrows
			navigation: {
				nextEl: '.offers-button-next',
				prevEl: '.offers-button-prev',
			}
		});

	} catch {
		return;
	}
	
	try {

		const mainSlider = new Swiper('.swiper-main', {
			modules: [Navigation, Pagination],
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			// Navigation arrows
			navigation: {
				nextEl: '.main-button-next',
				prevEl: '.main-button-prev',
			},
			pagination: { 
				el: '.swiper-pagination', 
				clickable: true ,
				renderBullet: function (index, className) {
					if (index > 9) {
						return `<span class="${className}"><span class="bullet-number">${(index + 1)}</span></span>`
					} else {
						return `<span class="${className}"><span class="bullet-number">0${(index + 1)}</span></span>`
					}
				  }
			}
		});

	} catch {
		return;
	}
	

	try {

		const arrivalSlider = new Swiper(".arrivals-slider", {
			modules: [Pagination],
			centerInsufficientSlides: true,
			slidesPerView: 6,
			spaceBetween: 30,
			pagination: {
			  el: ".arrivals-slider__pagination",
			  clickable: true,
			},
		});

	} catch {
		return;
	}
	

	try {

		const trendingSlider = new Swiper(".trending__slider", {
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.trending__button-next',
				prevEl: '.trending__button-prev',
			}
		});

	} catch {
		return;
	}

	

	try {

		const saleSlider = new Swiper(".sale__slider", {
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,
			navigation: {
				nextEl: '.sale__button-next',
				prevEl: '.sale__button-prev',
			}
		});

	} catch {
		return;
	}

	
	try {
		var thumbs = new Swiper (".product-photo__thumbs", {
			slidesPerView: 5,
			spaceBetween: 20,
			  watchSlidesProgress: true
		});
	
		var photoProductSlider = new Swiper (".product-photo__slides", {
			modules: [Navigation, Thumbs],
			slidesPerView: 1,
			centeredSlides: true,
			navigation: {
				nextEl: '.product__photo-next',
				prevEl: '.product__photo-prev',
			},
			thumbs: {
				swiper: thumbs,
			}
		});
		
	} catch {

	}

	try {

		const completeLookSlider = new Swiper(".complete-look__slider ", {
			modules: [Navigation, Pagination],
			slidesPerView: 2,
			spaceBetween: 30,
			navigation: {
				nextEl: '.complete-look__next',
				prevEl: '.complete-look__prev',
			},
			pagination: {
				el: ".complete-look__pagination",
				clickable: true,
			}
		});

	} catch {
		return;
	}
	
	try {

		const interestedInSlider = new Swiper(".interested-in__slider ", {
			modules: [Navigation],
			slidesPerView: 4,
			spaceBetween: 30,
			navigation: {
				nextEl: '.interested-in__next',
				prevEl: '.interested-in__prev',
			}
		});

	} catch {
		return;
	}

	try {

		const recentlyViewedSlider = new Swiper(".recently-viewed__slider ", {
			modules: [Navigation],
			slidesPerView: 4,
			spaceBetween: 30,
			navigation: {
				nextEl: '.recently-viewed__next',
				prevEl: '.recently-viewed__prev',
			}
		});

	} catch {
		return;
	}
}
