export const shuffle = (array) =>
  [...Array(array.length)]
    .map((...args) => Math.floor(Math.random() * (args[1] + 1)))
    .reduce((a, rv, i) => ([a[i], a[rv]] = [a[rv], a[i]]) && a, array);
