'use strict'

var first2 = first();
// var second = first2.then(function (value) {
//   console.log(value)
// });
// var second2 = first2.then(second());
// second2.then(console.log)

var second2 = first2.then(function(secretValue) {
  return second(secretValue)
});
second2.then(console.log)

// function onFulfilled(value) {
//   console.log(value)
// }
