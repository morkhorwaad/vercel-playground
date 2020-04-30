const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/test', (req, res) => res.json({ "response": "fucku" }));
app.post('/testing', (req, res) => {
    const { name, message } = req.body; 
    res.send(`${name} wants to tell you ${message}`);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))