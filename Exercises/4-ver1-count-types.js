'use strict';

const array = [true, 'hello', 5, 12, -200, false, 'word', null, 6.7, undefined,
  ['a', 'b'], { name: 'John' }, 0, 'true', 'false', NaN, -Infinity, Infinity];

const types = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  object: 0,
};

for (const el of array) {
  if (typeof el === 'number') types.number++;
  else if (typeof el === 'string') types.string++;
  else if (typeof el === 'boolean') types.boolean++;
  else if (typeof el === 'undefined') types.undefined++;
  else if (typeof el === 'object') types.object++;
}
console.log(types);
