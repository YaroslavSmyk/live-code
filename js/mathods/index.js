
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func
// output: arr

// option 1
// input: num, index(optional), arr(optional)
// output: boolean
// function filterCallback(num) {
//     console.log('filterCallback is called ' + num)
//     return num > 5;
// }

// const filterRes = anotherNumbersList.filter(filterCallback)
// console.log(filterRes);

// option 2
// const filterRes = anotherNumbersList.filter(function (num) {
//   return num > 5;
// });
// console.log(filterRes);

// option 3
const filterRes = anotherNumbersList.filter(num => num > 5);
console.log(filterRes);


// -----map

const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func, obj
// output: arr

// input: element
// output: modified el
// const maoRes = numbersList.map(el =>  el * el)

// numbersList.map(el =>  el * el)
// console.log(maoRes)

// const maoRes = numbersList.map(el =>  {
//     if (el < 0) {
//         return 'number is negaative'
//     }
//     return el * el;
// }
// numbersList.map(el =>  el * el)
// console.log(maoRes)

// find
// input: func
// output: number

// option 1
// input: el
// output: boolean
// const findRes = numbersList.find(el => {
//     if (el % 2 === 1) {
//         return true
//     } else {
//         return false
//     }
// });

// console.log(findRes)

// option 2
// const findRes = numbersList.find(el => el % 2 === 1);

// console.log(findRes)

// some
// input: func
// output: boolean


// ----forEach
// input: func
// output: undefined

// callbacl
// input: el
// output: undefined
numbersList.forEach(el => {
    if (el < 0) {
        console.log(el)
    }
});