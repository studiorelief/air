import './index.css';

import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import gsap from 'gsap';

import { swiperPageTech } from '$utils/component/swiper/swiperTech';
import { swiperUsecasesCarousel } from '$utils/component/swiper/swiperUsecases';
import { darkMode } from '$utils/global/darkMode';
import { gsapTransitionV2 } from '$utils/global/gsapTransitionV2';
// import { gsapTransitionOut } from '$utils/global/gsapTransition';
import { initHeroBackgroundHover } from '$utils/global/heroBackground';
import { loadScript } from '$utils/global/loadScript';
import { initMarker } from '$utils/global/marker';
import { loadModelViewerScript } from '$utils/global/modalViewer';
import { activeSplitText } from '$utils/global/splitType';
import { initTechLineScroll } from '$utils/tech/gsapScroll';
import { animateUsecasesAsset } from '$utils/usecases/lottieParallax';
import { animateButtonExpertise } from '$utils/vision/expertise-tabs';
import { marqueeAnimation } from '$utils/vision/marquee';
import { rotateBackgroundAssets } from '$utils/vision/rotationBackground';

/* 
! Animation
*/

// Animation V0
barba.init({
  transitions: [
    {
      name: 'page-transition',
      async leave(data) {
        //  gsapTransitionOut();
        return gsap.to(data.current.container, {
          marginTop: '-25vh',
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
        });
      },
      beforeEnter() {
        gsapTransitionV2();
      },
      async after(data) {
        // await gsapTransitionV2Out();
        return gsap.from(data.next.container, {
          marginTop: '25vh',
          opacity: 0,
          duration: 0.5,
          delay: 1,
          ease: 'power1.out',
        });
      },
    },
  ],
});

/* 
! Global 
*/

// Script
loadModelViewerScript();

Promise.all([
  loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
  loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
  loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
]);

// Dark Mode
darkMode(
  `
    text-color--text-primary,
    text-color--text-alternate,
    background-color--background-primary,
    background-color--background-alternate,
    background-color--background-grey-opacity,
    background-color--background-full-white,
    background-color--background-grey-v2,
    border-color--border-primary,
    border-color--border-alternate
    `.replace(/\s+/g, ''),
  0,
  'power1.inOut'
);

// Marker
initMarker();

// Headings & Heroes
activeSplitText();
initHeroBackgroundHover();

// Footer
marqueeAnimation();

/* Vision */
if (window.location.pathname === '/') {
  animateButtonExpertise();
  rotateBackgroundAssets();
  swiperUsecasesCarousel();
}

/* Tech */
if (window.location.pathname.includes('tech')) {
  swiperPageTech();
  initTechLineScroll();
}

/* Usecases */
if (window.location.pathname.includes('usecases')) {
  animateUsecasesAsset();
}

/*
BARBA BEFORE
*/
// barba.hooks.beforeEnter((data) => {
//   const AnimationPageTextV2 = () => {
//     const dataNamespace = data.next.namespace;
//     console.log(dataNamespace);
//     const transitionText = document.querySelector('.transition-v2_text');
//     if (transitionText) {
//       transitionText.textContent = dataNamespace;
//     }
//   };
//   AnimationPageTextV2();
// });

/*
! BARBAR AFTER 
*/

barba.hooks.after(async () => {
  /* Global */

  await restartWebflow();

  const video = document.querySelectorAll('video');
  if (video) {
    video.forEach((v) => {
      v.play();
    });
  }

  // scroll to top
  window.scrollTo(0, 0);

  // Headings & Heroes
  activeSplitText();
  initHeroBackgroundHover();

  // Script
  loadModelViewerScript();

  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
  ]);

  /* Vision */
  if (window.location.pathname === '/') {
    animateButtonExpertise();
    rotateBackgroundAssets();
    swiperUsecasesCarousel();
  }

  /* Tech */
  if (window.location.pathname.includes('tech')) {
    swiperPageTech();
    initTechLineScroll();
  }

  /* Usecases */
  if (window.location.pathname.includes('usecases')) {
    animateUsecasesAsset();
  }
});
