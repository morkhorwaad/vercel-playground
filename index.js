const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const app = express()
app.use(bodyParser.urlencoded())

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

const contactAddress = "holler@mork.dev"
const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
})

app.post("/contact", function (req, res) {
  mailer.sendMail(
    {
      from: req.body.from,
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]",
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))