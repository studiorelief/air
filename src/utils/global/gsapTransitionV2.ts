import { data } from '@barba/core';
import gsap from 'gsap';

export function gsapTransitionV2() {
  // const logo = document.querySelector('.navbar_logo-round');
  //   const logoMain = document.querySelector('.navbar_logo-text');
  //   const main = document.querySelector('.main-wrapper');
  const transitionWrapperV2 = document.querySelector('.transition-v2_component');
  //   const transitionText = document.querySelector('.transition_text');
  //   const viewportHeight = window.innerHeight;
  //   const scaleAmount = viewportHeight;

  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: 'power2.inOut',
    },
  });

  tl.fromTo(
    transitionWrapperV2,
    {
      display: 'none',
      //   marginTop: '100vh',
      opacity: 0,
      //   duration: 0.25,
    },
    {
      display: 'flex',
      //   marginTop: '0vh',
      opacity: 1,
      duration: 0.25,
      ease: 'power1.out',
    }
  ).to(transitionWrapperV2, {
    // marginTop: '-100vh',
    opacity: 0,
    duration: 0.25,
    delay: 0.5,
    ease: 'power1.in',
  });

  const AnimationPageTextV2 = () => {
    const dataNamespace = data.next.namespace;
    console.log(dataNamespace);
    const transitionText = document.querySelector('.transition-v2_text');
    if (transitionText) {
      transitionText.textContent = dataNamespace;
    }
  };
  AnimationPageTextV2();
}
