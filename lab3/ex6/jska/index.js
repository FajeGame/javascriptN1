let calculator = {
    a: 0,
    b: 0,
    c: 0,
    read(a, b){
        this.a = a
        this.b = b
    },
    sum(){
        this.c = this.a + this.b
        return this.c
    },
    mul(){
        this.c = this.a * this.b
        return this.c
    }
}

console.log(calculator.a + " " + calculator.b)
calculator.read(5, 6)
console.log(calculator.a + " " + calculator.b)
console.log(calculator.sum())
console.log(calculator.mul())



