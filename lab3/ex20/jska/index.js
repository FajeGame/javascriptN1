class Stock{
    constructor() {
        this.lst = []
    }
    add(w, v){
        this.lst.push({w, v})
    }
    getByW(min_w){
        for(let i in this.lst){
            if(this.lst[i].w >= min_w){
                let temp = this.lst[i]
                this.lst.splice(i, 1)
                return temp
            }
            return -1
        }
    }
    getByV(min_v){
        for(let i in this.lst){
            if(this.lst[i].v >= min_v){
                let temp = this.lst[i]
                this.lst.splice(i,1)
                return temp
            }
            return -1
        }
    }
}

let stock = new Stock()

stock.add(20, 30)
stock.add(30, 20)
stock.add(15, 10)
stock.add(10, 15)

console.log(stock.getByV(24))
console.log(stock.getByW(24))
console.log(stock.getByV(9))
console.log(stock.getByV(25))