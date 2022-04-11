const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, init acc(opti)
// output: acc (number)



// callback 
// input: acc, value. index, array
// output: acc
// transactions.reduce((acc, element) => {
//   console.log('acc =' + acc)
//   acc += element
//   return acc
// // console.log(element)
// // acc += 100
// }, 0);


// input: arr, callback
// output:  arr


// callback 
// input: el
// output: boolean

// algo
// 1. iterate arr
// 2. apply calback to el
// 3. if true - push to res arr
// const filterArrayElements = (arr, callback) => {
//   const res = []
//   for(let i = 0; i < arr.length; i +=1) {
//    if(callback(arr[i])) {
// res.push(arr[i])
//    }
//   }
//   return res;
// };

// test data 
const arr = ['Andrey',' Vlad']
const callback = el => el.includes('a')

function sum(a, b) {
  console.log(arguments)
}

console.log(sum (5, 9));
