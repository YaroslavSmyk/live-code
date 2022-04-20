// 'use strict';

// /**
//  * @param {string[]} keysList
//  * @param {array} valuesList
//  * @return {object}
//  */
// function buildObject(keysList, valuesList) {
//   return valuesList.map(val => ({[keysList[0]] : val.toString()}));
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);


// 'use strict';

// /**
//  * @param {string[]} keysList
//  * @param {array} valuesList
//  * @return {object}
//  */
// algo
// 1/iterate keysList array
// 2. add key-value
// function buildObject(keysList, valuesList) {
//   let newObj = {}
//   for (let index = 0; index < keysList.length; index+=1) {
//     newObj[keysList[index]] = valuesList[index];
//   }
//   return newObj;
// }

// examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); 
// console.log(result)

// const keys = ['name']
// const values = ['Ann']
// const result = buildObject(keys, values); 
// console.log(result)

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     // acc[key] = valuesList[index];
//    return {...acc, [key]: valuesList[index]}
//     // return acc;
//   }, {});
// };

function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => ({...acc, [key]: valuesList[index]}
  ), {});
};

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(result)


// function buildObject(keysList, valuesList) {
  
//   return keysList.reduce(
//     (acc, key, index) => (acc[key] = valuesList[index]),
//     {}
//   );
// }














// function buildObject(keysList, valuesList){
//   let newArr = {}

//   console.log(newArr[keysList[0]] = valuesList[0][0] )

//   return newArr
// }

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);