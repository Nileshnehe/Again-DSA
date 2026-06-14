let arr = [1, 2, 3, 7, 5];

// count = 0;
// t = 12
// let result = []
// for (let i = 0; i < arr.length; i++) {

//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//         sum += arr[j];

//         if (sum == t) {
//             count++
//             let subarr = arr.slice(i, j + 1);
//             result.push(subarr)
//         }
//     }

// }

// console.log(count)
// console.log(result)

//  1. Time Complexity: $\mathcal{O}(n^2)
// Space Complexity: $\mathcal{O}(1)

// Notes
// 🎬 arr.slice(i, j + 1) Kaise Kaam Kar Raha Hai?
// JavaScript ka rule hai ki arr.slice(start, end) me end index ko chhod diya jata hai (exclusive hota hai). Isliye hume j + 1 likhna padta hai taaki j waala element bhi include ho sake.

// 1. Pehla Match (i = 1, j = 3 par):Yahan elements hain: index 1 (2), index 2 (3), aur index 3 (7).sum = 2 + 3 + 7 = 12arr.slice(1, 3 + 1) $\rightarrow$ arr.slice(1, 4)Yeh index 1, 2, 3 nikalega: [2, 3, 7]

// Optimize Code

let t =12;

function findSubArray(arr, t) {
    let count = 0;
    let sum = 0;
    let left = 0
    let result = [];

    for(let right=0; right<arr.length; right++){

        sum += arr[right]

        while(sum > t && left < right){
            sum -= arr[left]
            left++
        }

        if(sum == t){
            count++
            let subArr = arr.slice(left, right+1)
            result.push(subArr)
        }
    }
    return {count , result}
    
}

// console.log("Total count: ", findSubArray(arr, t))
// console.log(output.result)

let output = findSubArray(arr, t)
console.log("Total count: ",output.count)
console.log("Total SubArr: ",output.result)