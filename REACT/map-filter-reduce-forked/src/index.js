

// //Map -Create a new array by doing something with each item in an array.

// // function triple(x) {
// //     return x * 3;
// // }
// // const newNumbers = numbers.map(triple);

// // console.log(newNumbers);

// // var newNumbers = [];

// // numbers.forEach(function (x) {

// //     newNumbers.push(x * 2);
// //     });
// // console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.



// // function numberCheck(num) {
// //     return num < 100;
// // }
// // const newNumbers = numbers.filter(numberCheck);

// // var newNumbers = [];
// // numbers.filter(function(num) {
// //     if(num > 10) {
// //         newNumbers.push(num)
// //     }

// // });
// // console.log(newNumbers);



// //Reduce - Accumulate a value by doing something to each item in an array.


// // function Adds(pre, cur) {
// //     return pre + cur;
// // }



// // var newNumbers = numbers.reduce(Adds);

// // console.log(newNumbers);





// //Find - find the first item that matches from an array.

// // var numbers = [3, 56, 2, 48, 5, 6];


// // var newNumbers = numbers.find(function (num) {
// //     return num > 10;
// // });

// // console.log(newNumbers);

// //FindIndex - find the index of the first item that matches.

// var numbers = [3, 56, 2, 48, 5, 6];

// var newNumbers = numbers.findIndex(function (num) {
//     return num > 10;
// });

// console.log(newNumbers);


// CHALLANGE

import emojipedia from "./emojipedia";

var newArray = [];


emojipedia.map(function () {
    newArray.push(emojipedia.meaning);

})

console.log(newArray);
