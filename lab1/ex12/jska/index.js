let a = 5
switch (a){
    case 1:
        console.log("На ветке сидит " + a + " ворона")
        break
    case check24(a):
        console.log("На ветке сидит " + a + " вороны")
        break
    case check5(a):
        console.log("На ветке сидит " + a + " ворон")
        break
    default:
        console.log("Введено неверное количество ворон")
}
function check24(a){
    const resp = [2, 3, 4]
    return resp.includes(a) ? a : 0
}

function check5(a){
    const resp = [5, 6, 7, 8, 9, 10]
    return resp.includes(a) ? a : 0
}