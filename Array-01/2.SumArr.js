let arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (i = 0; i < arr.length; i++){
// sum = sum + arr[i];
// }
// console.log(sum);


// Alternative Modern Approach
// How It Works
// .reduce() takes two main things:

// A "Reducer" Function: This function tells JavaScript what to do with the current accumulated value and the current array item.
// An Initial Value (optional but recommended): The starting point for the accumulation (e.g., 0 for sum, 1 for product).
let sum = arr.reduce((accumulator,currentValue) => accumulator + currentValue,0)
console.log(sum) //output 150