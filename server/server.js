const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const sendEmail = require("./sendEmail")

const app = express()

const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, "..", "public")))

app.post("/contact", (req, res) => {
    console.log(req.body)
    const { name, email, message } = req.body
    sendEmail(name, email, message)

    res.end()
})

app.get("/", (req, res) => {
    const html = path.resolve(__dirname, "..", "public", "index.html")
    res.sendFile(html)
})

app.listen(PORT, () => console.log(`Running on port ${ PORT }`))