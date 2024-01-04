import superheroes from "superheroes";
import fs from "fs";
var names = superheroes.random();
fs.appendFile('name.txt', `${names} ,`, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }); 
