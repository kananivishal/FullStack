const { render } = require('ejs')
const express = require('express')
const app = express()
const PORT = 8080
const path = require('path')

// middleware
app.use(express.json())

// Ejs setup
app.set('view engine', 'ejs') // to set ejs on server
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "public")))

/*
    ejs = embeded java script to use html and javascript combiend
    set view engine to ejs in browser to user ejs
*/

// route
app.get("/", (req, res) => {
    let number = Math.floor(Math.random() * 10);
    res.render("index", { number })
})

let todoList = ["Vishal", "Jay", "Ram"]
app.get("/todo", (req, res) => {
    res.render("todo", { todoList })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})