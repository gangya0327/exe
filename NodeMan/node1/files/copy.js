'use strict'
var fs = require('fs')

var fcopy = function () {
    console.log(0, Date.now())
    var source = fs.readFileSync('./copy.js', {
        encoding: 'utf-8'
    })
    console.log(1, Date.now())
    fs.writeFileSync('./files/copy.js', source)
    console.log(2, Date.now())
}

fcopy()