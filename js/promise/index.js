const formElem = document.querySelector('.login-form')
console.log('form created');
// console.dir(new Date());

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users'

function createUserHandler(event) {
  event.preventDefault();
  console.log('test');



  const user = {
    email: 'asd@gmail.com',
    name: 'Yaroslav',
    password: '0000000',
  };

  // in url(string), options(obj)
  // out  promis
  const promise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json',
    },
    body: JSON.stringify(user)
  });
  // .then 
    // in:  callBack, callBack(option)
    // out:  promise


    // callBack .then
   // in:  result of prev promis
  // out: any - will be wrapped in the promise
  promise.then(res => {
    // in: none
    // out: promise
   return res.json();
    console.log(res)
  }).then(body => {
    console.log(body)

  });
  }


formElem.addEventListener('submit', createUserHandler);
console.log('listener added');
