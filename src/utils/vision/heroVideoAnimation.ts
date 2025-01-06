import gsap from 'gsap';

export function heroVideoAnimation() {
  // Get all video frames
  const videoFrames1 = document.querySelectorAll('.vision_hero_video-frame.is-1');
  const videoFrames2 = document.querySelectorAll('.vision_hero_video-frame.is-2');
  const videoFrames3 = document.querySelectorAll('.vision_hero_video-frame.is-3');

  if (!videoFrames1.length || !videoFrames2.length || !videoFrames3.length) return;

  // Create GSAP timeline for animation
  const tl = gsap.timeline({
    repeat: -1, // Infinite loop
    defaults: {
      duration: 1,
      ease: 'power2.inOut',
    },
  });

  // Timeline 1: Initial state
  tl.to(videoFrames1, {
    height: '0%',

    delay: 2,
    duration: 1,
  });

  // Timeline 1: Initial state
  tl.to(videoFrames2, {
    height: '0%',

    delay: 2,
    duration: 1,
  });

  tl.set(videoFrames1, {
    height: '100%',
    duration: 1,
    zIndex: 0,
  });
  // Timeline 1: Initial state
  tl.to(videoFrames3, {
    height: '0%',
    zIndex: 1,
    delay: 2,
    duration: 1,
  });
}
