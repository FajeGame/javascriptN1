function equation(x, y, z){
    u = (Math.max(x,y) + Math.max(x+y, z))/((Math.max(0.5, x+z)*(Math.max(0.5, x+z))))
    return u
}
console.log(equation(5, 6, 7))