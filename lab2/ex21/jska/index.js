function MaxMin(arr, M, N){
    let max_ = 0
    let maxTemp = -9999
    let min_ = 0
    let minTemp = 9999

    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(maxTemp < arr[i][j]){maxTemp = arr[i][j]}
        }
        max_ += maxTemp
        maxTemp = -9999
    }
    console.log(max_)

    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(minTemp > arr[j][i]){minTemp = arr[j][i]}
        }
        min_ += minTemp
        minTemp = 9999
    }
    console.log(min_)
}

let arr = new Array()
const M = 2, N = 2
for(let i = 0; i < M; i++){
    arr[i] = new Array()
    for(let j = 0; j < N; j++){
        arr[i][j] = ((Math.random() < 0.5) ? -1: 1) * (Math.floor(Math.random() * 50))
    }
}
MaxMin(arr, M, N)



