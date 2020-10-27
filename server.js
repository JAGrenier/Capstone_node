require("dotenv").config();
const express = require("express")

const app = express()
// get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data:{
            restaurant: ["mcyds", "Jenn's Bagels"]
        }
        
    })
})

// get individual restaurants
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req)
})


const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server is up and on port ${port}`)
});

