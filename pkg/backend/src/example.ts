type example = {
  num: number;
  word: string;
  listWords: string[];
};

export const exampleFunc = function (tests: example[]): boolean {
  return tests.length > 0;
};

export const tests: example[] = [
  {
    num: 1,
    word: 'word1',
    listWords: ['one', 'two', 'three'],
  },
  {
    num: 2,
    word: 'word1',
    listWords: ['one', 'two', 'three'],
  },
  {
    num: 3,
    word: 'word1',
    listWords: ['one', 'two', 'three'],
  },
];
