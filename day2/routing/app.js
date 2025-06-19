const express = require('express')
const app = express()
const port = 8080

// middleware
app.use("/home",(req,res)=>{
    res.send("<h1>This is middleware</h1>")
})

// routing -> GET method
// app.get('/signup',(req,res)=>{
//     res.send("<h1>Signup routing with GET method</h1>")
// })

// path parameter -> URL : http://localhost:8080/r/cat
// app.get("/r/:anything",(req,res)=>{
//     console.log(req.params)
//     console.log(req.params.anything)
//     let{anything} = req.params
//     res.send(`<h1>My fav animal is ${anything}</h1>`)
// })

// query parameter
// app.get("/serch",(req,res)=>{
//     console.log(req.query)
//     console.log(req.query.movie)
//     let{movie} = req.query
//     res.send(`<h1>My fav movie is ${movie}</h1>`)
// })

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
