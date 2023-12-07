import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const styleOnScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      element.style.background = '#e46855';
      element.style.height = '50px';
    } else {
      element.style.background = 'transparent';
      element.style.height = '80px';
    }
  };
  document.addEventListener('scroll', styleOnScroll);
});
