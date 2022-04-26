// input: 
// output: 

// option 1
// input: 
// output: 

/* eslint-disable */

// // const messanger = createMessenger();
// // run();

// /* eslint-disable */

// // GLOBAL LEX ENV
// // {
// //   'enviromentRecord': {
// //     'message': 'Test',
// //     'weight': 55,
// //     'run': {
// //         console.log('RUN');
// //      },
// //      'createMessenger': { ..},
// //      'messanger': ....
// //   },
// //   'outherLexicalEnv': null
// // }

// createMessenger() {
//     enviromentRecord: {
//         message:
//         sender:
//         sendMessage:
//         setSender:
//         setMessage:
//     }
// }
// outherLexicalEnv


const message = 'Test';
const weight = 55;

// if (false) {
//     function sum(a, b) {
//         return a + b;
//     }
// }
// sum(95, 10)


function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

sendMessage('jack')
//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
}

const messager = createMessenger();
run();