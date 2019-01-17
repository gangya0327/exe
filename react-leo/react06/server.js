const express = require('express')
const server = express()

server.listen(2831)

server.use('/get', (req, res) => {
    res.send(['中国','美国','德国','法国','新西兰'])
})

server.use(express.static("./"))