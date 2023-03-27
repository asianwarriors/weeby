import { exampleFunc, tests } from './example';

const res1 = exampleFunc(tests);
const res2 = exampleFunc([]);
// const res3 = testFunc([{ num: 'test', word: 'test', listWords: ['test'] }]);

console.log('res1 and 2', res1, res2);
