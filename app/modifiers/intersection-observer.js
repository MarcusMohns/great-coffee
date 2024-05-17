import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const createObserver = () => {
    let observer;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.25, 0.5, 0.75, 1],
    };

    observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(element);
    console.log(observer);
  };

  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry, 'intersecting');
        entry.target.style.padding = '50px';

        // if (entry.intersectionRatio >= 0.75) {
        //   intersectionCounter++;
        // }
      } else {
        entry.target.style.padding = '5px';
      }
    });
  };

  const eventOptions = { once: true };

  window.addEventListener('scroll', createObserver, eventOptions);
});
