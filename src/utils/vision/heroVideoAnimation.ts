import gsap from 'gsap';

export function heroVideoAnimation() {
  let timeline: gsap.core.Timeline | null = null;
  let videoLoadListeners: { element: HTMLVideoElement; listener: () => void }[] = [];

  function init() {
    const videoFrames1 = document.querySelectorAll('.vision_hero_video-frame.is-1');
    const videoFrames2 = document.querySelectorAll('.vision_hero_video-frame.is-2');
    const videoFrames3 = document.querySelectorAll('.vision_hero_video-frame.is-3');
    const syncVideos = document.querySelectorAll('.video_component.syncro-loading');

    if (!videoFrames1.length || !videoFrames2.length || !videoFrames3.length) return;

    // Reset all videos to beginning and pause
    Array.from(syncVideos).forEach((video: Element) => {
      if (video instanceof HTMLVideoElement) {
        video.currentTime = 0;
        video.pause();
      }
    });

    let videosLoaded = 0;
    const totalVideos = syncVideos.length;

    // Wait for all videos to be fully loaded
    Array.from(syncVideos).forEach((video: Element) => {
      if (video instanceof HTMLVideoElement) {
        if (video.readyState >= 4) {
          videosLoaded = videosLoaded + 1;
          if (videosLoaded === totalVideos) {
            startAnimation();
          }
        } else {
          const listener = () => {
            videosLoaded = videosLoaded + 1;
            if (videosLoaded === totalVideos) {
              startAnimation();
            }
          };
          video.addEventListener('loadeddata', listener, { once: true });
          videoLoadListeners.push({ element: video, listener });
        }
      }
    });

    function startAnimation() {
      // Start all videos simultaneously
      Array.from(syncVideos).forEach((video: Element) => {
        if (video instanceof HTMLVideoElement) {
          video.play();
        }
      });

      // Start the animation timeline
      timeline = gsap.timeline({
        repeat: -1,
        defaults: {
          duration: 1,
          ease: 'power2.inOut',
        },
      });

      // Timeline animations...
      timeline
        .to(videoFrames1, {
          height: '0%',
          delay: 2,
          duration: 1,
        })
        .to(videoFrames2, {
          height: '0%',
          delay: 2,
          duration: 1,
        })
        .set(videoFrames1, {
          height: '100%',
          duration: 1,
          zIndex: 0,
        })
        .to(videoFrames3, {
          height: '0%',
          zIndex: 1,
          delay: 2,
          duration: 1,
        });
    }
  }

  function destroy() {
    // Kill the GSAP timeline
    if (timeline) {
      timeline.kill();
      timeline = null;
    }

    // Remove all event listeners
    videoLoadListeners.forEach(({ element, listener }) => {
      element.removeEventListener('loadeddata', listener);
    });
    videoLoadListeners = [];

    // Pause all videos
    const syncVideos = document.querySelectorAll('.video_component.syncro-loading');
    Array.from(syncVideos).forEach((video: Element) => {
      if (video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
  }

  return {
    init,
    destroy,
  };
}
