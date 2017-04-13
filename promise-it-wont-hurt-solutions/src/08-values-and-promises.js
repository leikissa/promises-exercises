'use strict'
function attachTitle(arg1){
  return 'DR. ' + arg1
}
var promise = new Promise(function(fulfill, reject) {
  fulfill('MANHATTAN');
})

promise
.then(attachTitle)
.then(console.log)
