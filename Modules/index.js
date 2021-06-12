const Browser = require('./Module')

const browser1 = new Browser({id:1,engine:'V8', speed:'fast'})

console.log(browser1.DBRequest());