import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const styleOnScroll = () => {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      element.style.background = '#e46855';
      element.style.height = '80px';
      element.style.padding = '0px 80px';
      element.style.fontSize = '1.5em';
    } else {
      element.style.background = 'transparent';
      element.style.padding = '0px';
      element.style.fontSize = '1.8em';
      element.style.height = '70px';
    }
  };
  document.addEventListener('scroll', styleOnScroll);
});
