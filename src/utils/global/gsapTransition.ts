import gsap from 'gsap';

export const gsapTransitionOut = () => {
  // Selector
  const logo = document.querySelector('.navbar_logo-round');
  const logoMain = document.querySelector('.navbar_logo-text');
  const main = document.querySelector('.main-wrapper');
  const transitionWrapper = document.querySelector('.transition_component');
  const transitionText = document.querySelector('.transition_text');

  // Variables
  const viewportHeight = window.innerHeight;
  const scaleAmount = viewportHeight;

  // timeline
  /* 
  TODO : Réduire l'anim à 2 secondes max
  TODO : Fix le bug du transtionWrapper -> Disparait avec l'anim de back
  TODO : Revoir la timeline
  */
  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.inOut',
      duration: 0.25,
    },
  });

  tl.to(
    main,
    {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    },
    '-0.5'
  )
    .to(
      logoMain,
      {
        color: 'var(--dark--text-color--text-primary)',
        duration: 0.25,
        ease: 'power2.inOut',
      },
      '-=0.5'
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
    })
    .to(
      transitionWrapper,
      {
        // opacity: 0,
        display: 'none',
        duration: 0.15,
        ease: 'power2.inOut',
      },
      '-=0.6'
    )
    .to(
      logoMain,
      {
        color: 'var(--light--text-color--text-primary)',
        duration: 0.25,
        ease: 'power2.inOut',
      },
      '-=0.25'
    )
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
