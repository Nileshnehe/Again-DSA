let arr = [22, 34, 54, 44];

// let temp = new Array(arr.length);

// let i = arr.length-1;
// for(let j = 0; j<temp.length; j++){
//     temp[j]=arr[i];
//     i--;
// }

// console.log(`Reverse Array: [${temp.join(', ')} ]`);
// output: [ 44, 54, 34, 22 ]

// optimize 
let i = 0; let j = arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);