let arr = [50, 55, 78, 898,];


let max = arr[0];

for(let i = 1; i <= arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}

console.log(max)