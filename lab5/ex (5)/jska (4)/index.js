async function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Оба аргумента должны быть числами');
    }

    let iteration = 0;
    let currentSum = a;

    const waitInterval = () => new Promise(resolve => {
        const intervalId = setInterval(() => {
            iteration++;
            currentSum += b;

            console.log(`Итерация ${iteration}: сумма = ${currentSum}`);

            if (iteration === 5) {
                clearInterval(intervalId);
                resolve(currentSum);
            }
        }, 2000);
    });

    return await waitInterval();
}

async function runDemo() {
    try {
        console.log('Успешный вызов:');
        const result1 = await sum(10, 5);
        console.log(`Финальная сумма: ${result1}`);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('\nВызов с ошибкой:');
        const result2 = await sum(10, 'не число');
        console.log(`Финальная сумма: ${result2}`);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}

runDemo();