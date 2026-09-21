'use strict';

const array = [true, 'hello', 5, 12, -200, false, 'word', null, 6.7, undefined,
  ['a', 'b'], { name: 'John' }, 0, 'true', 'false', NaN, -Infinity, Infinity];

const countTypesInArray = (array) => {
  const types = {};
  for (const el of array) {
    const type = typeof el;
    if (type in types) types[type]++;
    else types[type] = 1;
  }
  return types;
};
console.log(countTypesInArray(array));
module.exports = { countTypesInArray };
