const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

let users = []
let currentID = 1

// router
app.get("/user", (req, res) => {
    res.send(users)
})

app.post("/signup", (req, res) => {
    let { name, email, password } = req.body
    const newUser = {
        id: currentID++,
        name,
        email,
        password
    }
    users.push(newUser)
    res.status(200).json({
        message: "User created successfully",
        newUser
    })
    // res.send(users)
})


// PUT Route for update
app.put("/user/:id", (req, res) => {
    let { id } = req.params
    let { name, email, password } = req.body
    const user = users.find((u) =>
        u.id === parseInt(id)
    )
    if (!user) {
        res.status(404).json({ message: "User note found!" })
    }
    user.name = name
    user.email = email
    user.password = password
    res.status(200).json({ message: "User update successfully!", user: user })
})

// DELETE Route for delete
app.delete("/user/:id", (req, res) => {
    let id = req.params.id
    const user = users.findIndex((u) => u.id === parseInt(id))
    if (user === -1) {
        return res.status(404).json({ message: "User not found!" })
    }
    users.splice(user, 1)
    res.status(200).json({ message: "User deleted successfully!", users: users })
})

app.get("", (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
    console.log(`http://localhost:8080`)
})