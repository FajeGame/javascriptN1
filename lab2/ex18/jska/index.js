function reverseOrBack(a){
    for(let i = 0; i < a.length - 1; i++){
        if(a[i] > a[i+1]){} else return i + 1
    }
    return a.reverse()
}

let arr = [5,4,3,2,4,1]
console.log(reverseOrBack(arr))


