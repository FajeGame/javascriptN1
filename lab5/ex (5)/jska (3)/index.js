const f1 = async (x) => x ** 2;
const f2 = async (x) => 2 * x;
const f3 = async (x) => -2;

const functions = [f1, f2, f3];

async function calculateF(x, functions) {
    let intermediateResult = 0;
    const results = [];

    for (let i = 0; i < functions.length; i++) {
        const fi = functions[i];
        const fiResult = await fi(x);
        intermediateResult += fiResult;

        results.push({
            step: i + 1,
            fiValue: fiResult,
            intermediate: intermediateResult,
        });
    }

    return {
        x,
        steps: results,
        finalResult: intermediateResult,
    };
}

function printResults(result) {
    console.log(`\nВычисление F(x) для x = ${result.x}:`);
    result.steps.forEach(step => {
        console.log(`f${step.step} дает значение ${step.fiValue}, промежуточный результат ${step.intermediate}.`);
    });
    console.log(`Таким образом, ответ для F(x): ${result.finalResult}.`);
}

async function runCalculations(xValues) {
    for (const x of xValues) {
        const result = await calculateF(x, functions);
        printResults(result);
    }
}

const xValues = [2, 4, 6];
runCalculations(xValues)
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });