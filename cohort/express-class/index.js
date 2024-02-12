// creating a http server using express
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port,() => {
    console.log(`${port} is listening...`)
})

// here, code is starting
var users = [{
    fname: 'nishchay',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get('/',(req,res) => {
    // gets userName, and returns number of healthyKidneys and unhealthyKidneys kidneys
    const ind = 0
    // const ind = req.body.index
    const userKidneys = users[ind]['kidneys']
    const numberOfKidneys = userKidneys.length
    let healthyKidneys = 0
    userKidneys.forEach((kidney) => {
        if(kidney.healthy === true) healthyKidneys++;
    })
    const unhealthyKidneys = numberOfKidneys-healthyKidneys
    res.json({
        numberOfKidneys,
        healthyKidneys, 
        unhealthyKidneys
    })
})

app.post('/',(req,res) => {
    // user gets a new kidney of its choice
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'done!!'
    })
})
app.put('/',(req,res) => {
    // user can healthify all kidneys
    const kidneys = users[0].kidneys;
    kidneys.forEach((kidney) => {
        kidney.healthy = true
    })
    res.json({})
})
app.delete('/',(req,res) => {
    // user removes all unhealthy kidneys
    const kidneys = users[0].kidneys;
    users[0].kidneys = kidneys.filter((_,health) => {
        return health
    })
    res.json({})
})
