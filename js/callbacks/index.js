function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  
  resolver(sum);
}

function printResult(res) {
  console.log('Result is ' + res);
}

sum(10, 16, printResult);

function alertResultfrom(res) {
    alert('Result is ' + res);
}

sum(10, 16, alertResultfrom);

function senResult(res) {
//    sending email
}

sum(10, 16, senResult);

