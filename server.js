require("dotenv").config();
const express = require("express")

const app = express()

app.get("/getRestaurants", (req, res) => {
    res.json({
        status: "sucess",
        restaurant: "mcyds"
    })
})

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server is up and on port ${port}`)
})

