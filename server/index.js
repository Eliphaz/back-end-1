const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const SERVER_PORT = 4000

app.listen(SERVER_PORT, () =>{
    console.log(`server up on ${SERVER_PORT}`)
})

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends)
    console.log(friends)
  })

app.get("/weather/:temperature", (req,res) =>{
    const temp = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(temp)
})