const express = require('express')
const server = express()

server.listen(2831)

server.use('/get', (req, res) => {
    res.send(['中国','瑞士','希腊','俄罗斯'])
})

server.use(express.static('./'))