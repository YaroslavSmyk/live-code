// console.log(window)
// console.log(this)

const obj = {
  age: 100,
  run: function () {
console.log(this)
}
}


const func = obj.run;
func();
// function run() {
// console.log(this)
//   console.log(`I've done running in ${this.city}`)

// }

//   1. what is context?
//   2 when context is lost
//   3 how to fix context 


// input: none
// out: undefined
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
console.log(this);
console.log(this.secondsPassed);

   this.intervalId = setInterval(() => {
      console.log(this);
      console.log(this.secondsPassed);


      this.secondsPassed +=1;

      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {

  },
  getTime() {

  },
  resetTime() {

  },
};

// timer.startTimer()

// кто владеет вызовом функции?