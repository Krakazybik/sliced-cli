export const toCamelCase = (text) =>
  text
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
