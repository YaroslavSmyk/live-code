// input: obj
// ouput: arr


// algo
// 1. 
// 2. 
// 3. 
// 4.

const getCustomersList = obj => {
  Object.entries(obj)
};






// Kolya
// function compareObjects(obj1, obj2) {
// 	const arr = Object.keys(obj1);
//     console.log(arr)
// 	if (arr.length != Object.keys(obj2).length){
// 		return false;
// 	}
// 	return arr.every(el => obj1[el] === obj2[el])
// }

// function compareObjects(obj1, obj2) {
// 	const keys = Object.keys(obj1);

// 	if (keys.length !== Object.keys(obj2).length){
// 		return false;
// 	}

// 	return arr.every(key => obj1[key] === obj2[key])
// }


// vlad
// function compareObjects(obj1, obj2) {
//   const result = Object.keys({ ...obj1, ...obj2 });
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   return result.every(key => obj1[key] === obj2[key]);
// }

// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   const keys = Object.keys({ ...obj1, ...obj2 });
//   return keys.every(key => obj1[key] === obj2[key]);
// }


// liza
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
//   const isValueEqual = values1.every((value, index) => value === values2[index]);

//   if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
//     return false;
//   }

//   return true;
// }

// function compareObjects(obj1, obj2) {
//   debugger;
//   return Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }

// function compareObjects(obj1, obj2) {
//   const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//   const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

//   if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
//     return false;
//   }

//   return firstArrKeyVal.every((value, index) => value === secondArrKeyVal[index]);
// }


// function compareObjects(obj1, obj2) {
//   const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//   const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

//   if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
//     return false;
//   }

//   return firstArrKeyVal.every((key, index) => key === secondArrKeyVal[index]);
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);

//   if (keys.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   for (let key of keys) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   return keys1.every((el, index) => {
//     return el === keys2[index] && values1[index] === values2[index];
//   });
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }
  
//   return keys1.every((key, index) => {key === keys2[index] && values1[index] === values2[index];
//   });
// }


// function compareObjects(obj1, obj2) {
//   const entriesObj1 = Object.keys(obj1);
//   const entriesObj2 = Object.keys(obj2);

//   if (entriesObj1.length !== entriesObj2.length) {
//     return false;
//   }

//   return entriesObj1.reduce((acc, key) => {
//     return acc && obj1[key] === obj2[key];
//   }, true);
// }

// function compareObjects(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   if (key1.length !== key2.length) {
//     return false;
//   }
// return !keys.some(key => obj1[key] !== obj2[key] )

//   return key1.reduce((acc, key) => {
//     return acc && obj1[key] === obj2[key];
//   }, true);
// }

// function compareObjects(obj1, obj2) {
//   // const prop1 = Object.entries(obj1);
//   // const prop2 = Object.entries(obj2);

//   // if (prop1.length !== prop2.length) {
//   //   return false;
//   // }

//   return _.isEqual(obj1, obj2);
// }

// V2
// function compareObjects(obj1, obj2) {
//   return Object.keys({ ...obj1, ...obj2 }).every(element => obj1[element] === obj2[element]);
// }

// V3
// function compareObjects4(obj1, obj2) {
//   let arr = Object.entries(obj1).join() === Object.entries(obj2).join();

//   return arr;
// }

// console.log(compareObjects4(obj1, obj3));

// function compareObjects(obj1, obj2) {
//   if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
//     return false;
//   }
//   const objFirstKeys = Object.keys(obj1);
//   const objSecondKeys = Object.keys(obj2);
//   const objFirstValues = Object.values(obj1);
//   const objSecondValues = Object.values(obj2);

//   return objFirstKeys.every(
//     (key, index) =>
//       (key === objSecondKeys[index]) === (objFirstValues[index] === objSecondValues[index]),
//   );
// }

// function compareObjects(obj1, obj2) {
//   debugger;
//   return Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }

function compareObjects(obj1, obj2) {
  // return JSON.stringify(obj1) === JSON.stringify(obj2);

const arr1 = Object.entries(obj1);
const arr2 = Object.entries(obj2);

if (arr1.length != arr2.length) {
  return false;
}

// return arr1.every(
//   (arr, index) => arr[0] === arr2[index][0] && arr[1] === arr2[index][1]
// );

return !arr1.some(
  (arr, index) => arr[0] != arr2[index][0] || arr[1] != arr2[index][1]
);
}

