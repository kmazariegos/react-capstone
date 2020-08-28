const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const User = require('./models/user')
const API = "https://dog.ceo/api/breed/hound/images"
const fetch = require('node-fetch')

app.get("/", (req, res) => {
    res.send("inside backend")
})
 

app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))

const dbURL = "mongodb+srv://karlaDB:karlaDB@cluster0.sipyb.mongodb.net/react-node?retryWrites=true&w=majority"

const connectDB = async () => {
    try {

        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log("mongoDB is connected")
        
    } catch (error) {
        console.log(error)
    }
}

connectDB()

app.post("/api/register", async(req, res) => { 
    try {
        await User.create({
            breed: req.body.userBreed, 
            email: req.body.userEmail
        })

        res.json({
            message: "User registered"
        })
    } catch (error) {
        res.json({
            message: "Email already registered"
        })
    }
    console.log(req.body, "hello")
})

app.get("/api/users", async (req, res) =>{
    try {
        const users = await User.find()
        
        res.json({
            users: users
        })
    } catch (error) {
        console.log(error)
    }
})


app.get('/api/dogImages', async (req, res) => {     
    const dog_response = await fetch(API);
    const dog_data = await dog_response.json();
  
    const data = {
      dog: dog_data,
    };

    const hello = res.json(data); 
  });





app.listen(port, () => {
    console.log(`server running on port ${port}`)
})