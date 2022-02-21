'use strict';
// 1.
// 2.
// 3.
// 4.

// message = 'hello'
// console.log(message)

const numbersList1 = [1, 2, 3, 4, 5];
// const numbersList1 = new Array(1, 2, 3, 4, 5);

console.log('before pop ', numbersList1);

// // pop
// input: none
// return: number
const res = numbersList1.pop();
console.log(res);

console.log('after pop ', numbersList1);

const numbersList2 = [1, 2, 3, 4, 5];

console.log('after push ', numbersList2);

// input: number
// return: numbers.length
const pushRes = numbersList2.push('some element');
console.log(pushRes);

console.log('before shift ', numbersList2);

// input: none
// return: number
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift  ', numbersList3);
console.log(numbersList3.shift());
console.log('after shift  ', numbersList3);

// input: none
// return: numbers.length
const numbersList4 = [1, 2, 3, 4, 5];
console.log('before unshift  ', numbersList4);
console.log(numbersList4.unshift());
console.log('after unshift  ', numbersList4);
