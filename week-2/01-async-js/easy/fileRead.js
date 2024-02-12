const fs = require('fs')

function getData() {
    return new Promise((resolve,reject) => {
        fs.readFile('a.txt','utf-8',(err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }) 
    
}

async function start() {
    try{
        const data = await getData();
        console.log(data)
    }
    catch(err) {
        console.error('Error reading file:', err);
    }
}

start()
