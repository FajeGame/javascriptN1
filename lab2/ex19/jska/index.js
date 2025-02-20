function multiply(a){
    for(let i in a){
        if((a[i] >= 0) && (a[i] % 2 == 1)){
            a[i] *= 3
        } else if((a[i] < 0) && (a[i] % 2 == 0)){
            a[i] /= 5
        }
    }
    return a
}

let arr = [-4,-5,3,2,5,-1]
console.log(multiply(arr))


