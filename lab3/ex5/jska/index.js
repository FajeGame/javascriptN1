function  multiplyNumeric(obj){
    for(let i in obj){
        if(typeof(obj[i]) == "number"){
            obj[i] *= 2
        }
    }
}

let obj = {
    name: "Microsoft Internet Explorer",
    version: "9.0",
    numer1: 1,
    numer2: 2,
    numer3: 3
}

for(let i in obj){
    console.log(`${i}: ${obj[i]}`)
}

multiplyNumeric(obj)

for(let i in obj){
    console.log(`${i}: ${obj[i]}`)
}


