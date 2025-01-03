import gsap from 'gsap';

export function marqueeAnimation() {
  const marquee = document.querySelector('[wb-data="marquee"]');
  if (!marquee) {
    return;
  }
  const duration = parseInt(marquee.getAttribute('duration') || '10', 20);
  const marqueeContent = marquee.firstChild;
  if (!marqueeContent) {
    return;
  }

  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.append(marqueeContentClone);

  let tween: gsap.core.Tween;

  const playMarquee = () => {
    const progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();
    const width = parseInt(
      getComputedStyle(marqueeContent as Element).getPropertyValue('width'),
      10
    );
    const gap = parseInt(
      getComputedStyle(marqueeContent as Element).getPropertyValue('column-gap'),
      10
    );
    const distanceToTranslate = -1 * (gap + width);

    tween = gsap.fromTo(
      marquee.children,
      { x: 0 },
      { x: distanceToTranslate, duration, ease: 'none', repeat: -1 }
    );
    tween.progress(progress);
  };
  playMarquee();

  function debounce(func: () => void) {
    let timer: number;
    return function (event: Event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(
        () => {
          func();
        },
        500,
        event
      ) as unknown as number;
    };
  }

  window.addEventListener('resize', debounce(playMarquee));
}
