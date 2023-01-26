const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    if(name=='dog'){
        res.json({'sound' : 'wal wal'})
    } else if(name =='cat'){
        res.json({'sound' : 'meow meow'})
    } else {
        res.json({'message' : 'who are you?'})
    }
})

app.listen(port)