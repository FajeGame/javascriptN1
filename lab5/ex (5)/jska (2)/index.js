const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function readConfig(name) {
    const delayTime = Math.floor(Math.random() * 1000);
    await delay(delayTime);
    console.log('(1) config from ' + name + ' loaded');
}

async function doQuery(statement) {
    const delayTime = Math.floor(Math.random() * 1000);
    await delay(delayTime);
    console.log('(2) SQL query executed: ' + statement);
}

async function httpGet(url) {
    const delayTime = Math.floor(Math.random() * 1000);
    await delay(delayTime);
    console.log('(3) Page retrieved: ' + url);
}

async function readFile(path) {
    const delayTime = Math.floor(Math.random() * 1000);
    await delay(delayTime);
    console.log('(4) Readme file from ' + path + ' loaded');
}

async function executeAll() {
    try {
        await Promise.all([
            readConfig('myConfig'),
            doQuery('select * from cities'),
            httpGet('http://google.com'),
            readFile('README.md')
        ]);
        console.log("It is done!");
    } catch (error) {
        console.error("Error:", error);
    }
}

executeAll();