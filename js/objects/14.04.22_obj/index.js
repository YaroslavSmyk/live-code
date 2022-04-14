// input: obj, string, any
// ounput: obj

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return  obj;
// }

// function addPropertyV2(obj, key, value) {
//  Object.assign({key, obj, value});
//   return  obj;
// }



// function addPropertyV2(obj, key, value) {
//   const newObj = Object.assign({}, obj);
//   return newObj;
// }


// input: obj1, obj2 ...
// ounput: obj
// function addPropertyV2(obj, key, value) {
//   Object.assign(obj);
//   obj[key] = value;
//   return obj;
// }

// function addPropertyV3(obj, key, value) {
//   const newObj = {...obj}
//     Object.assign(newObj, { [key], value});
//      return  newObj;
// };

// function addPropertyV3(obj, key, value) {
//     Object.assign({}, { [key], value });
//      return  newObj;
// };


function addPropertyV4(obj, key, value) {
  return Object.assign(...obj,  [key]: value);
     
};

// addPropertyV1({name: "ann"}, 'amount', 890)

const products = {
  name: 'Laptop',
}

const res = addPropertyV2products(product, 'price', 250)
console.log(res)

// put your code here

// put your code here

// put your code here

// examples
// const transaction = {
//   value: 170,
// };
// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

// rest
