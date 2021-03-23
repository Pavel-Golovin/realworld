export const getRandomInt = (min, max) => {
  // eslint-disable-line import/prefer-default-export
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};
