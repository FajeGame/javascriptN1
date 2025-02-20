let arr = []
for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * 100 % 50))
}
console.log(arr)
let max_ = Math.max(...arr)
let min_ = Math.min(...arr)
let indexMax = arr.indexOf(Math.max(...arr))
let indexMin = arr.indexOf(Math.min(...arr))
arr[indexMax] = min_
arr[indexMin] = max_
console.log(arr)
