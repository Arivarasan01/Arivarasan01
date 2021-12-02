const symbol1 = [];

// calling the Symbol.iterator() method
const Iterator1 = symbol1[Symbol.iterator]();

// gives Array Iterator
console.log(Iterator1);

const symbol2 = 'hello';

// calling the Symbol.iterator() method
const Iterator2 = symbol2[Symbol.iterator]();

// gives String Iterator
console.log(Iterator2);