import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const styleOnScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      element.style.background = 'red';
    } else {
      element.style.background = 'transparent';
    }
  };

  document.addEventListener('scroll', styleOnScroll);
});
