'use strict';
var http = require("q-io/http");

var promise = http.read('http://localhost:1337')

promise
.then(JSON.parse)
.then(console.log)
