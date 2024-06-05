import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const createObserver = () => {
    let observer;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.65,
    };

    observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(element);
  };

  const intersectionCallback = (entries) => {
    if (entries[0].isIntersecting) {
      const htmlImageTextContainers = [
        ...entries[0].target.children[1].children,
      ];
      htmlImageTextContainers.forEach((child, index) => {
        child.classList.add(`animated-${child.classList[0]}-${index}`);
      });
    }
  };
  const eventOptions = { once: true };
  window.addEventListener('scroll', createObserver, eventOptions);
});
