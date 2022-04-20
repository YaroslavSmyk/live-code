// input: obj, obj
// ouput: boolean

// algo

// function compareObjects(obj1, obj2) {
//   console.log(JSON.stringify(obj1))
//  return JSON.stringify(obj1) === JSON.stringify(obj2)
// }

// algo
// 1. get keys, get values
// 2. check keys length
// 3. compate every  key/value with  .every metod
// **. compare  key/values, if .some if not quual - false

function compareObjects(obj1, obj2) {
  debugger;
  return Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true

// function compareObjects(obj1, obj2) {
//   let result = []
//   let result2 = []
//   for (let i = 0; i < obj1.length; i++) {
// result += obj1[i]
//   }
//   for (let j = 0; j < obj2.length; j++) {
//     result2.push(obj2[j])
//   }
//   if (result === result2) {
//     return true;
//   }
//   return false;
// };

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true
