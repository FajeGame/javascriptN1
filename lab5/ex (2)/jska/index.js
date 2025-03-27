function readConfig (name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded')
            resolve()
        }, Math.floor(Math.random() * 1000))
    })
}
function doQuery (statement) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement)
            resolve()
        }, Math.floor(Math.random() * 1000))
    })
}
function httpGet (url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url)
            resolve()
        }, Math.floor(Math.random() * 1000))
    })
}
function readFile (path) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded')
            resolve()
        }, Math.floor(Math.random() * 1000))
    })
}
// Вызов функций

Promise.all([
    readConfig('myConfig'),
    doQuery('select * from cities'),
    httpGet('http://google.com'),
    readFile('README.md')
])
    .then(() => {
        console.log("It is done!")
    })
    .catch((error) => {
        console.error("Error:", error)
    })
