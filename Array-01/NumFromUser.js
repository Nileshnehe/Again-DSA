let prompt = require("prompt-sync")()
let n = Number(prompt("Enter Size of arr"))

let arr = new Array(n)

for (i = 0; i<arr.length; i++){
    arr[i]= Number(prompt("Enter Num"))
}
console.log(arr)