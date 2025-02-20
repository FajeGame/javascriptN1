function printFor(a, b){
    for(let i = 0; i < a.length; i++){
        console.log(a[i] + " - " + b[i])
    }
}

function printForIn(a, b){
    for(let i in a){
        console.log(a[i] + " - " + b[i])
    }
}

let countries = ["Россия", "Великобритания", "США"]
let population = [143800000, 68350000, 334900000]
printFor(countries, population)
printForIn(countries, population)
