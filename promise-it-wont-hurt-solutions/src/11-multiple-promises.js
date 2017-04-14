'use strict';

function all(promise1, promise2){
  return new Promise(function(fulfill, reject){
    var counter = 0;
    var result = []
    promise1.then(function(input){
      result[0] = input
      counter++
      if (counter === 2) {
        fulfill(result)
      }
    })
    promise2.then(function(input){
      result[1] = input
      counter++
      if (counter === 2) {
        fulfill(result)
      }
    })
  })
}

all(getPromise1(),getPromise2())
.then(console.log)
