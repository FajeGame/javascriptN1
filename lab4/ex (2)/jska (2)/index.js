// Асинхронные функции
function readConfig (name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}
function doQuery (statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}
function httpGet (url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}
function readFile (path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}
function callback () {
    console.log('It is done!')
}
function notifyStep1() {
    readConfig('myConfig', notifyStep2)
}

function notifyStep2() {
    doQuery('select * from cities', notifyStep3)
}

function notifyStep3() {
    httpGet('http://google.com', notifyStep4)
}

function notifyStep4() {
    readFile('README.md', callback)
}

console.log('start')
notifyStep1()
console.log('end')
