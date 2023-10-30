/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// 0 IMPORTING ALL THE PACKAGES 
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";



// 1 inquirer INSTALL 



inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




// 2 qr-image INSTALL 



var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });


// 3 creating txt file to save the user input 


fs.writeFile("message.txt", "Hello world",  (err) => {
    if (err) throw err;
    console.log("file had been saved!");
});