// var generateName = require('sillyname'); This was in CJS: common javascript

// NOW THESE CODE ARE IN EMJS WHICH USED import heyword 

import generateName from "sillyname";
import superheroes from "superheroes";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// SUPER HEROES NAME GENERATOR PACKAGE 

import random from "superheroes";

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'

console.log(`i am a ${superheroes.random()}`)