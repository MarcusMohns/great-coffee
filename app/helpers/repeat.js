import { helper } from '@ember/component/helper';

export function displayGround(params) {
  const [item, num] = params;
  let items = [];

  for (let index = 0; index < num; index++) {
    items.push(item);
  }
  return items.join('');
}

export default helper(displayGround);
