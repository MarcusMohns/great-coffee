import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const styleOnScroll = () => {
    if (window.scrollY > 50) {
      element.classList.add('is-scrolled');
    } else {
      element.classList.remove('is-scrolled');
    }
  };
  document.addEventListener('scroll', styleOnScroll);
});
