'use strict';
var promise = new Promise(function(fulfill,reject){
  reject(new Error("Oh noes!"))
})

promise
.catch(function (err) {
  console.error(err.message)
})
function onReject(error) {
  console.log(error.message)
}

var promiseSuccess = Promise.resolve("Yay, we did it!")
var promiseReject = Promise.reject(new Error("If at first you don't succeed, try, try again."))

promiseSuccess
.then(console.log)

promiseReject
.then(onReject)
