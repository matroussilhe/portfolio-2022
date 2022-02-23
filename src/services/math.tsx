/**
 * Easing function (cf. https://easings.net/#easeOutQuad)
 *
 * @param x absolute progress of the animation in the bounds of 0 (beginning of the animation) and 1 (end of animation)
 * @returns eased progress
 */
export const easeInOutQuad = (x: number): number => {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};

export const getRandomInteger = (min: number, max: number) => {
  const minInteger = Math.ceil(min);
  const maxInteger = Math.floor(max);

  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
};
