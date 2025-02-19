function perimetr(xy){
    let len = 0
    for(let i = 0; i < xy.length - 1; i++){
        len += (Math.sqrt(((xy[i+1][0]) - (xy[i][0]))**2 + ((xy[i+1][1]) - (xy[i][1]))**2))
    }
    len += (Math.sqrt((xy[0][0] - xy[xy.length-1][0])**2 + (xy[0][1] - xy[xy.length-1][1])**2))
    return len
}
let xy = [[1,2], [3,4], [5,4], [5,2], [6,1]]
console.log(perimetr(xy))