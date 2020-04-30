const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/testing', (req, res) => {
    const { name, message } = req.body; 
    res.send(`${name} wants to tell you ${message}`);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))