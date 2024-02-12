const express = require('express')
const bodyparser = require('body-parser')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const app = express()
const port = 3000
const jwtKey = 'madrid'
/*
make three routes -> 

/signup -- user will send data, username and password; create user if username is not already in use and store the user in database

/signin -- user will send username and password, send jwt token iff in database

/users -- user will send token, send list of all users iff token verified
*/ 
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://nishchay:siwalik3431@cluster0.ymaacac.mongodb.net/userDatabase')
        console.log('Connected to database !!!')
    } catch (err) {
        console.log(err)
    }
}

connectToDatabase()
app.use(bodyparser.json())

// Zod Schemas
const usernameSchema = zod.string().min(4)
const passwordSchema = zod.string().min(4)

// Mongo User Schema
const User = mongoose.model('Users', {
    username: String, 
    password: String
})

function checkCredentials(username,password) { 
    const checkUsername = usernameSchema.safeParse(username)
    const checkPassword = passwordSchema.safeParse(password)
    return checkUsername.success && checkPassword.success
}

async function ifPresent(username) {
    const currUser = await User.findOne({username: username}) 
    return currUser
}

app.get('/',(req,res) => {
    try {
        console.log("server is listening!")
        res.send({
            msg : 'server is listening!'
        })
    } catch {
        console.log("server is not listening!")
        res.send({})
    }
})

app.post('/signup',async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    // authenticate username and password
    const check  = checkCredentials(username,password)
    if(!check) {
        res.status(400).send("Bad username and/or password !!!")
    } else {
        // check if username is present in database
        const usernamePresent = await ifPresent(username)
        if(!usernamePresent) {
            // create user with these credentials
            const newUser = new User({
            username: username,
            password: password
           })
           await newUser.save()
           res.status(200).send("User Created !!!")
        } else {
            // user already exists
            res.status(403).send("Username already exists !!!")
        }            
    }
})

app.post('/signin', async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    // authenticate username and password
    const check = checkCredentials(username,password)
    if(!check) {
        res.status(400).send("Bad username and/or password !!!")
    } else {
        // check if username is present in database
        const userPresent = await ifPresent(username)
        if(userPresent) {
            if(userPresent.password === password){
                // send a jwt token
                var token = jwt.sign({username: username},jwtKey);
                res.status(200).send(token)
            } else {
                res.status(400).send("Incorrect password !!!")
            }
        } else {
            res.status(403).send("User does not exist !!!")
        }            
    }
    
})

app.get('/users', async (req,res) => {
    const token = req.headers.authorization.split(' ')[1]
    // verify token
    try {
        const decoded = jwt.verify(token,jwtKey)
        // send a list of all users
        // const users = await User.find()
        const users = await User.find({}, { _id: 0, username: 1 }); // Exclude _id and include only username
        const usernames = users.map(user => user.username);
        res.status(200).send(usernames)
    } catch (err){
        res.status(401).send("Invalid Token")
    }
})

app.listen(port)