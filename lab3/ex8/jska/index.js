class Browser{
    constructor(name, version) {
        this.name = name
        this.version = version
    }
    aboutBrowser(){
        for(let i in this){
            console.log(`${i}: ${this[i]}`)
        }
    }
}

let myBrowser = new Browser("Microsoft Internet Explorer",  "9.0")
myBrowser.aboutBrowser()
