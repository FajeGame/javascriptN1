function isEmpty(obj){
    if(Object.keys(obj).length == 0){
        return true
    }
    else return false
}

let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
}

console.log(isEmpty(myBrowser))

