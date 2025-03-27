async function conductInterview(name, prepTime1, defenseTime1, prepTime2, defenseTime2) {
    console.log(`${name} started the 1 task.`);
    await delay(prepTime1 * 1000);
    console.log(`${name} moved on to the defense of the 1 task.`);
    await delay(defenseTime1 * 1000);
    console.log(`${name} completed the 1 task.`);

    // Отдых
    console.log(`${name} is resting.`);
    await delay(5000);

    console.log(`${name} started the 2 task.`);
    await delay(prepTime2 * 1000);
    console.log(`${name} moved on to the defense of the 2 task.`);
    await delay(defenseTime2 * 1000);
    console.log(`${name} completed the 2 task.`);
}

async function interviews(candidates) {
    const promises = candidates.map(candidate =>
        conductInterview(...candidate)
    );
    await Promise.all(promises);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interviews([
    ['Ivan', 5, 2, 7, 2],
    ['John', 3, 4, 5, 1],
    ['Sophia', 4, 2, 5, 1]
]);