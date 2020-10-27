require("dotenv").config();
const express = require("express")
const morgan = require('morgan') 
const app = express()

app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler hit")
    res.status(200).json({
        status: "success",
        data:{
            restaurant: ["mcyds", "Jenn's Bagels"]
        }
        
    })
})

// get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req. params)

    res.status(200).json()({
        status: "success",
        data: {
            restaurant: ["Jenn's Bagels"]
        }
    })
})

// create a restaurant 
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json()({
        status: "success",
        data: {
            restaurant: ["AJ's Bagels"]
        }
    })
});

// update a restaurant 
app.put("/api/v1/restaurants/:id", (req, res) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json()({
        status: "success",
        data: {
            restaurant: ["Jackiess Bagels"]
        }
    })
})

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server is up and on port ${port}`)
});

