import 'swiper/css';

import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';

// Use built-in creative effect instead of custom carousel effect
export function swiperPageTech() {
  const swiperContainers = document.querySelectorAll('.swiper.is-expertise');

  swiperContainers.forEach((container) => {
    // Cast container to HTMLElement to fix type error
    new Swiper(container as HTMLElement, {
      modules: [Autoplay, Mousewheel],
      direction: 'vertical',
      loop: true,
      slidesPerView: 6,
      autoHeight: true,
      spaceBetween: 8,
      // centeredSlides: true,
      speed: 500,
      autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: true,
      },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 3,
      //   },
      //   768: {
      //     slidesPerView: 3,
      //   },
      //   1024: {
      //     slidesPerView: 5,
      //   },
      // },
    });
  });
}
