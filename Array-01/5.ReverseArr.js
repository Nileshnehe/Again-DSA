let arr = [22, 34, 54, 44];

let temp = new Array(arr.length);

let i = arr.length-1;
for(let j = 0; j<temp.length; j++){
    temp[j]=arr[i];
    i--;
}

console.log(`Reverse Array: [${temp.join(', ')} ]`);
// output: [ 44, 54, 34, 22 ]