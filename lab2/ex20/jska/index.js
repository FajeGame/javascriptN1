function printInRange(arr, a, b){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(arr[i][j] > a && arr[i][j] < b){
                console.log(arr[i][j])
            }
        }
    }
}

let arr = [[],[],[],[],[]]
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        arr[i][j] = ((Math.random() < 0.5) ? -1: 1) * (Math.floor(Math.random() * 50))
    }
}
printInRange(arr, -5, 7)



