import './index.css';

import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import gsap from 'gsap';

// import gsap from 'gsap';
import { darkMode } from '$utils/global/darkmode';
import {
  /* gsapTransitionIn, */
  gsapTransitionOut,
  initBarbaClick,
} from '$utils/global/gsap-transition';
import { loadModelViewerScript } from '$utils/global/modalviewer';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* first load */
  initBarbaClick();
  loadModelViewerScript();

  /* Global */
  darkMode(
    // variables
    `
    text-color--text-primary,
    text-color--text-alternate,
    background-color--background-primary,
    background-color--background-alternate,
    background-color--background-grey,
    border-color--border-primary,
    border-color--border-alternate
    `.replace(/\s+/g, ''),
    // durée
    0.2,
    // ease
    'power1.inOut'
  );

  barba.init({
    transitions: [
      {
        name: 'page-transition',
        async leave(data) {
          await gsapTransitionOut();
          gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        },
        async enter(data) {
          await gsap.to(data.next.container, { opacity: 1, duration: 0.5 });
        },
      },
    ],
  });

  barba.hooks.beforeEnter((data) => {
    console.log('hook beforeEnter');

    /* 
    TODO: À retravailler -> Comprendre & régler async / await x Barba & GSAP
    TODO: Check Flip plugin GSAP
    */
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

  barba.hooks.after((data) => {
    console.log('hook After');
    console.log(data);

    restartWebflow();
    initBarbaClick();
  });
});

//
// window.Webflow.push(() => {
// });
