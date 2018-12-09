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

var scopy = function () {
    console.log(0, Date.now())
    var rs = fs.createReadStream('./movie.mp4'),
        ws = fs.createWriteStream('./files/movie2.mp4'),
        couter = 0
    console.log(1, Date.now())
    rs.on('data', function (chunk) {
        console.log(couter++)
        ws.write(chunk)
    })
    rs.on('end', function () {
        ws.end()
        console.log('done')
    })
    console.log(2, Date.now())
}

// fcopy()
scopy()