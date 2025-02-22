import gsap from 'gsap';

export function initHeroBackgroundHover() {
  const components = document.querySelectorAll('body');

  components.forEach((component) => {
    const backgroundRound = component.querySelector('.animation-grid_background-round');
    if (!backgroundRound) return;

    // Position initiale centrée en haut
    const roundElement = backgroundRound as HTMLElement;
    const componentWidth = component.clientWidth;
    const roundWidth = roundElement.offsetWidth;
    const initialX = (componentWidth - roundWidth) / 2;

    gsap.set(backgroundRound, {
      x: initialX,
      y: 0,
    });

    component.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = component.getBoundingClientRect();

      // Calculer la position relative de la souris dans le composant
      const mouseX = mouseEvent.clientX - rect.left;
      const mouseY = mouseEvent.clientY - rect.top;

      // Obtenir les dimensions du composant et de l'élément rond
      const componentHeight = component.clientHeight;
      const roundHeight = roundElement.offsetHeight;

      // Calculer les limites pour permettre au rond de déborder de 50%
      const maxX = componentWidth - roundWidth / 2;
      const maxY = componentHeight - roundHeight / 2;
      const minX = -roundWidth / 2;
      const minY = -roundHeight / 2;

      // Calculer la position centrée avec nouvelles contraintes
      const centerX = Math.max(minX, Math.min(maxX, mouseX - roundWidth / 2));
      const centerY = Math.max(minY, Math.min(maxY, mouseY - roundHeight / 2));

      gsap.to(backgroundRound, {
        x: centerX,
        y: centerY,
        duration: 1.5,
        ease: 'power2.out',
      });
    });

    component.addEventListener('mouseleave', () => {
      gsap.to(backgroundRound, {
        x: initialX,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
}
