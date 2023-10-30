// var generateName = require('sillyname'); This was in CJS: common javascript

// NOW THESE CODE ARE IN EMJS WHICH USED import heyword 

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);