/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// 0 IMPORTING ALL THE PACKAGES
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1 inquirer INSTALL

inquirer
  .prompt([
    {
      message: "Type In Your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    // 2 qr-image INSTALL

    const url = answers.URL;
    var qr_svg = qr.image(url);

    // HERE I AM STORING GENERATED QR IMAGE IN qr-image folder 
    
    const imagePath = path.join(__dirname, 'qr-image', 'qr-img.png');

    qr_svg.pipe(fs.createWriteStream(imagePath));

    // 3 creating txt file to save the user input

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("file had been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
