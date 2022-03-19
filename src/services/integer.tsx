export const getRandomInteger = (min: number, max: number) => {
  const minInteger = Math.ceil(min);
  const maxInteger = Math.floor(max);

  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
};

export const getRandomUniqueSortedIntegers = (min: number, max: number, count: number) => {
  const set = new Set<number>();

  while (set.size !== count) {
    set.add(getRandomInteger(min, max));
  }

  return [...Array.from(set)].sort((a, b) => a - b);
};
