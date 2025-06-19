const express = require("express")
const app = express()
const port = 8080

// Server created
app.listen(port, () => {
    console.log(`Server is connected to port no ${port}`)
})


// middleware
app.use("/home",(req,res)=>{
    // console.log(req)
    res.send("<h1>I am response from server</h1>")
})