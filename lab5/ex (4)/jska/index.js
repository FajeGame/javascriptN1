function sum(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== "number" || typeof b !== "number") {
            reject(new Error("Оба аргумента должны быть числами"))
            return
        }

        let iteration = 0
        let currentSum = a

        const intervalId = setInterval(() => {
            iteration++
            currentSum += b

            console.log(`Итерация ${iteration}: сумма = ${currentSum}`)

            if(iteration === 5) {
                clearInterval(intervalId)
                resolve(currentSum)
            }
        }, 2000)
    })
}

console.log("Успешный вызов: ")
sum(10, 5)
    .then(finalSum => console.log(`Финальная сумма: ${finalSum}`))
    .catch(error => console.error('Ошибка:', error.message))

setTimeout(() => {
    console.log('\nВызов с ошибкой:');
    sum(10, 'не число')
        .then(finalSum => console.log(`Финальная сумма: ${finalSum}`))
        .catch(error => console.error('Ошибка:', error.message));
}, 12000);