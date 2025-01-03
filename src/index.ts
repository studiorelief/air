import './index.css';

import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import gsap from 'gsap';

import { swiperPageExpertise } from '$utils/component/swiper/swiperExpertise';
import { swiperUsecasesCarousel } from '$utils/component/swiper/swiperUsecases';
import { initExpertiseLineScroll } from '$utils/expertise/gsapScroll';
import { darkMode } from '$utils/global/darkMode';
import { gsapTransitionOut, initBarbaClick } from '$utils/global/gsapTransition';
import { initHeroBackgroundHover } from '$utils/global/heroBackground';
import { loadScript } from '$utils/global/loadScript';
import { initMarker } from '$utils/global/marker';
import { loadModelViewerScript } from '$utils/global/modalViewer';
import { activeSplitText } from '$utils/global/splitType';
import { animateUsecasesAsset } from '$utils/usecases/lottieParallax';
import { animateButtonExpertise } from '$utils/vision/expertise-tabs';
import { marqueeAnimation } from '$utils/vision/marquee';
import { rotateBackgroundAssets } from '$utils/vision/rotationBackground';

window.Webflow ||= [];
window.Webflow.push(() => {
  /*
  ! GLOBAL
  */

  /* first load */
  initBarbaClick();
  loadModelViewerScript();

  /* Global */
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
  ]);

  darkMode(
    // variables
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
    // durée
    0,
    // ease
    'power1.inOut'
  );

  /* Marker */
  initMarker();

  /* Heroes */
  initHeroBackgroundHover();

  /* Headings */
  activeSplitText();

  /* Footer */
  marqueeAnimation();

  /* Usecases */
  animateUsecasesAsset();
  swiperUsecasesCarousel();

  /* Expertise */
  swiperPageExpertise();
  initExpertiseLineScroll();

  /* Vision */
  animateButtonExpertise();
  rotateBackgroundAssets();

  /* Experts */

  barba.init({
    transitions: [
      {
        name: 'page-transition',
        async leave(data) {
          await gsapTransitionOut();
          gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        },
        async enter(data) {
          await gsap.to(data.next.container, { opacity: 1, duration: 1 });
        },
      },
    ],
  });

  /*
  ! BARBAR BEFORE
  */

  barba.hooks.beforeEnter((data) => {
    console.log('hook beforeEnter');

    /* 
    TODO: À retravailler -> Comprendre & régler async / await x Barba & GSAP
    TODO: Check Flip plugin GSAP
    */

    /* Global */
    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
    ]);

    const AnimationPageText = () => {
      const dataNamespace = data.next.namespace;
      console.log(dataNamespace);
      const transitionText = document.querySelector('.transition_text');
      if (transitionText) {
        transitionText.textContent = dataNamespace;
      }
    };
    AnimationPageText();
  });

  /*
  ! BARBAR AFTER 
  */

  barba.hooks.after((data) => {
    console.log('hook After');
    console.log(data);

    /* Global */
    // scroll to top
    window.scrollTo(0, 0);
    restartWebflow();
    initBarbaClick();

    /* Headings & Heroes */
    activeSplitText();
    initHeroBackgroundHover();

    /* Expertise */
    swiperPageExpertise();
    initExpertiseLineScroll();

    /* Usecases */
    animateUsecasesAsset();
    swiperUsecasesCarousel();

    /* Vision */
    animateButtonExpertise();
    rotateBackgroundAssets();
  });
});
