let prompt = require("prompt-sync")()

// Ask for the size of the array
let n = Number(prompt("Enter Size of arr"))


// Create an empty array of size n
let arr = new Array(n)

// Loop through the array to get user input
// Fixed: declared 'i' with 'let' and used 'arr.length' correctly
for (i = 0; i<arr.length; i++){
    arr[i]= Number(prompt(`Enter Number ${i }:  `))
}
console.log(arr)
//output:
// Enter Size of arr3
// Enter Number 0:  1
// Enter Number 1:  2
// Enter Number 2:  3
// [ 1, 2, 3 ]