'use strict'

function parsePromised(input){
  var promise = new Promise(function(fulfill, reject){
    try {
      fulfill(JSON.parse(process.argv[2]));
    } catch (e) {
      reject(e);
    }
  })
}

parsePromised()
.then(null, console.log)

// Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an error is thrown.**Note:** your function should synchronously return the promise!
//   * Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.
//
//
// The equivalent "promisified" code might look like:
//
//   doSomethingRisky()
//   .then(doAnotherRiskyThing)
//   .then(null, console.log);
