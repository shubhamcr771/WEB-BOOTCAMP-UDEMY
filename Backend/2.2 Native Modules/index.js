import fs from "fs";
var number = Math.floor(Math.random()*2000);

fs.writeFile('practice.txt', " This is the list of id of Students  ,", (err) => {
  if (err) throw err;
  console.log('The file has been saved! hoho');
}); 
fs.readFile('./practice.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
fs.appendFile('practice.txt', `this is the index ${number}`, (err) => {
  if (err) throw err;
  console.log('The append text is done');
});