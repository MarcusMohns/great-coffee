import { helper } from '@ember/component/helper';

export function emptyStars(params) {
  const [stars, totalStars] = params;

  return totalStars - stars;
}

export default helper(emptyStars);
