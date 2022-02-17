// 1. Learn requirement -- Понять условие
// 2. Create step by algo (& input/ouput for function)  -- Алгорит действий (С чего начать) & что функция принимае и что возвращает
// 3. Write draft solution & testing  -- Писать код и тестировать
// 4. Refactoring & final testing -> final solition -- Улучшение кода

// algo
// 1. iterate numbers from 2 to num
// 2. check if prime
// 2.1 iterate all number from 2 to index
// 2.2 если  index / secondIndex === 0 - not prime
// 3. if prime - concole
// 4

// if i dont know algo
// 9
// 2 ==> 2/2 === 0 true
// 3 ===> 3/2 === 1, 3/3 === 0 -true
// 4 ==> 4/2 ===0, 4/3 === 1, 4/4 === 0 - false

// input: number
// return: undefined

function getPrimes(num) {
  for (let index = 2; index <= num; index++) {
      console.log('index is' + index);
    let isPrime = true;
    for (let secondIndex = 2; secondIndex < index; secondIndex++) {
      if (index % secondIndex === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(index);
    }
  }
}
// test data
getPrimes(10);
