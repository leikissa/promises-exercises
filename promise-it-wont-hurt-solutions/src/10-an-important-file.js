'use strict';

function alwaysThrows(){
  throw new Error('OH NOES');
}

function iterate(int){
  console.log(int)
  return int + 1
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(null, console.log)
// .then(null, alwaysThrows)
.then(iterate)
// .done();
