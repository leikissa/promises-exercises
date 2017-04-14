'use strict';

function all(promise1, promise2){
  var counter = 0;
  var promise = new Promise(function(fulfill, reject){
    if (counter === 2) {
      fulfill([])
    }
    fulfill(counter++)
  })
  promise1.then()
  promise2.then()
  counter++
  return promise
}

all(getPromise1(),getPromise2())
.then(console.log)
