import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const createObserver = () => {
    let observer;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(element);
  };

  const intersectionCallback = (entries) => {
    if (entries[0].isIntersecting) {
      const elementContainers = [...entries[0].target.children[1].children];
      // Children that will recieve the class
      elementContainers.forEach((child, index) => {
        child.classList.add(`animated-${child.classList[0]}-${index}`);
        // Add a new class named like the first class from classList with added 'animated-' in front of it to animate in css.
      });
    }
  };
  const eventOptions = { once: true };
  window.addEventListener('scroll', createObserver, eventOptions);
});
