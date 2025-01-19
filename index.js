const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const ShopperModel = require('./models/shopper');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/shopper")

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    ShopperModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else{
            res.json("User does not exist")
        }
    })
})

app.post('/register', (req, res) => {
    ShopperModel.create(req.body)
    .then(shoppers => res.json(shoppers))
    .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("server is running")
})