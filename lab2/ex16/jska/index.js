let arr1 = [1, 2, 5, 4, 6]
let arr2 = [8, 2, 5, 9, 5]
let arr3 = arr1.concat(arr2)
arr3.sort()
if(arr3.length % 2 == 0){
    console.log((arr3[arr3.length/2] + arr3[arr3.length/2 + 1])/2)
} else console.log(arr3[arr3.length/2])


