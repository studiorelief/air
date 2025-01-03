import 'swiper/css';

import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';

// Use built-in creative effect instead of custom carousel effect
export function swiperUsecasesCarousel() {
  const swiperUsecasesContainers = document.querySelectorAll('.swiper.is-usecases');

  swiperUsecasesContainers.forEach((container) => {
    // Cast container to HTMLElement to fix type error
    new Swiper(container as HTMLElement, {
      modules: [Autoplay, Mousewheel],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 5,
      spaceBetween: 8,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
  });
}
