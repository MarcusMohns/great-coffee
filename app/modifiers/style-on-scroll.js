import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const styleOnScroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      element.style.background = '#e46855';
      element.style.height = '45px';
      element.style.padding = '0px 80px';
    } else {
      element.style.background = 'transparent';
      element.style.height = '70px';
      element.style.padding = '0px';
    }
  };
  document.addEventListener('scroll', styleOnScroll);
});
