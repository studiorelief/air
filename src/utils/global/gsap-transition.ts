import gsap from 'gsap';

export const gsapTransitionOut = () => {
  // Selector
  const logo = document.querySelector('.navbar_logo-round');
  const main = document.querySelector('.main-wrapper');
  const transitionWrapper = document.querySelector('.transition_component');
  const transitionText = document.querySelector('.transition_text');

  // Variables
  const viewportHeight = window.innerHeight;
  const scaleAmount = viewportHeight;

  // timeline
  /* 
  TODO : Réduire l'anim à 2 secondes max
  */
  const tl = gsap.timeline();

  tl.to(
    main,
    {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    },
    '-0.5'
  )
    .to(logo, {
      scale: scaleAmount,
      duration: 1,
      ease: 'power2.inOut',
    })
    .to(
      transitionWrapper,
      {
        display: 'flex',
        opacity: 1,
        duration: 0.25,
        ease: 'power2.inOut',
      },
      '-=0.5'
    )
    .fromTo(
      transitionText,
      {
        display: 'flex',
        opacity: 0,
        y: -3 * 16,
      },
      {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.inOut',
        y: 0,
      },
      '-=0.5'
    )
    .to(transitionWrapper, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(transitionWrapper, {
          display: 'none',
        });
      },
    })
    .to(
      logo,
      {
        scale: 1,
        duration: 1,
        ease: 'power2.inOut',
      },
      '-=1'
    );
};

/* 
TODO: Remove when ok
*/
export const initBarbaClick = () => {
  const triggers = document.querySelectorAll('[barba=trigger]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      alert('fonctionne');
    });
  });
};
