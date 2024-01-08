import fs from "fs";
const number = Math.floor(Math.random()*2000)

fs.appendFile('message.txt', `This is my id ${number} ,`, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
}); 