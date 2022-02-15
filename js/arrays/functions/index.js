console.log('Hello, FE-19');

function getSenseOfLif() {
  return 42;
}

const res = getSenseOfLif();
console.log(res);

console.log(getSenseOfLif());

function getSenseOfLif(num) {
  // console.log(num * num);
  return num * num;
}

console.log(getSenseOfLif(4));
console.log(getSenseOfLif(-8));

function sum(num, number) {
  console.log(num);
  console.log(number);
  return num + number;
}

console.log(getSenseOfLif(5, 6));
console.log(111);

const num = 8;
const number = 10;
console.log(sum(num, number));

function print(num) {
  console.log('I am ' + num + ' years old');
  console.log('Sense of life is ' + getSenseOfLif());
}

print(34);

function print(num, number) {
  return;
}

print(2, 4);

// arrow funcs

const mult = (firstNum, secondNum) => {
    return firstNum * secondNum;
}

const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(20, 14));

const squareArrow = num => nun * num;

console.log(squareArrow(100));

function getMagicNumber() {
    return 17;
}

const getMagicNumber = () => 17;

console.log((() => 17) () === (( ) => 17)());