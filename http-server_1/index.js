const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send({
        fname : "nishchay", 
        age: 21,
        comment: "this is cool"
    })
})

app.listen(port,() => {
    console.log(`App listening on ${port}`)
})


/*
To-Do List
i should have a list
i should have a display of it
i should have a Input field and add btn
each list entry should have a delete btn

list = []
if add btn is pressed
string of data is rcvd
list.push(data)
refresh

if listItemBtn is pressed
list.delete(itemId)
refresh

const list = []
addBtnHandler(todo){
    list.push({
        name : "todo"
        id = id.random()
    })
}
delBtnHandler(id){
    list.delete(item where this.id === id)
}
*/