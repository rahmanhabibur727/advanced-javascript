// (map)::  
             // system-1:
// const numbers = [3, 4, 5, 6, 7,]
// const output = [];

// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//    const result = element*element; 
// output.push(result);
// }
// console.log(output);

              // system-2::
// const numbers = [3, 4, 5, 6, 7,]

// function square(element){
//     return element*element;
// }
// numbers.map(square);
// console.log(numbers);

          // system-3::

// const numbers = [3, 4, 5, 6, 7,]

// numbers.map(function(element){
//     console.log(element);
// });


                 // system-4::(index)
// const numbers = [3, 4, 5, 6, 7,]

// numbers.map(function(element){
//     console.log(element);
// });


           // system-5::(return)
// const numbers = [3, 4, 5, 6, 7,]
// const result = numbers.map(function(element){
//     return element*element;
// })
// console.log(result);


                 // system-6:(with arrow)
    // example-1:
    // const square = x => x*x;

    // example-2:
    // const square = element => element*element;

// example:-3
// const numbers = [3, 4, 5, 6, 7, 8]

// const result = numbers.map(x => x*x);
// console.log(result);



// [filter/find]:::(reduce)
const numbers = [3, 4, 5, 6, 7, 8];

const bigger = numbers.filter( x => x<7);
console.log(bigger);

const findOut = numbers.find(x => x>7);
console.log(findOut);









