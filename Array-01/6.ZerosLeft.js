let arr = [1, 0, 3, 0, 2]

let j = arr.length-1

for (let i = arr.length-1; i >= 0; i--){
    if (arr[i] !==0){

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--
    }
}console.log(arr)
// Time Complexity: $\mathcal{O}(n)$ — Kyunki hum poore array ko sirf ek baar traverse kar rahe hain.Space Complexity: $\mathcal{O}(1)$ — Humne koi naya array nahi banaya, usi array me manipulation kiya (In-place solution).Pointer Movement: i hamesha har step par piche jayega (i--), lekin j sirf tabhi piche khiskega jab use koi non-zero element milega.