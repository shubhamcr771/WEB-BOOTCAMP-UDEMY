/* 
1. Use the npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "What is your URL", name: "URL" },
    var qr_svg = qr.image(url);

    qr_svg.pipe(require("fs").createWriteStream("qr_img.png"));
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
