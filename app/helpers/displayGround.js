import { helper } from '@ember/component/helper';
export function displayGround(params) {
  const [groundType] = params;
  return groundType === 'freshlyGround' ? 'Freshly Ground' : 'Whole Bean';
}

export default helper(displayGround);
