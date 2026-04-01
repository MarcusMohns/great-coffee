import { modifier } from 'ember-modifier';

export default modifier((element) => {
  const glass = element.children[0];
  const img = element.children[1];

  if (!glass || !img) {
    return;
  }

  const zoom = 2;
  let bw = 2;
  let w = glass.offsetWidth / 2;
  let h = glass.offsetHeight / 2;

  const magnify = () => {
    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mousemove', moveMagnifier);

    glass.addEventListener('touchmove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize =
      img.width * zoom + 'px ' + img.height * zoom + 'px';
  };

  const moveMagnifier = (e) => {
    if (window.innerWidth <= 900) {
      return;
    }

    let pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    glass.style.left = x - w + 'px';
    glass.style.top = y - h + 'px';
    glass.style.backgroundPosition =
      '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
  };

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.scrollX;
    y = y - window.scrollY;
    return { x: x, y: y };
  }

  magnify();

  return () => {
    glass.removeEventListener('mousemove', moveMagnifier);
    img.removeEventListener('mousemove', moveMagnifier);
    glass.removeEventListener('touchmove', moveMagnifier);
    img.removeEventListener('touchmove', moveMagnifier);
  };
});
