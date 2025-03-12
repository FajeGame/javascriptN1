function Calculator(){
    this.read = function (a, b){
        this.a = a
        this.b = b
    }
    this.sum = function(){
        this.c = this.a + this.b
        return this.c
    }

    this.mul = function(){
        this.c = this.a * this.b
        return this.c
    }
}

let calculator = new Calculator()

console.log(calculator.a + " " + calculator.b)
calculator.read(5, 6)
console.log(calculator.a + " " + calculator.b)
console.log(calculator.sum())
console.log(calculator.mul())








