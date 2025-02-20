function recursive(n){
    if (n === 1) {
        return 1;
    } else {
        let sum = 0;
        for (let i = 1; i < n; i++) {
            sum += recursive(i);
        }
        return Math.sin(sum);
    }
}

console.log(recursive(4))
