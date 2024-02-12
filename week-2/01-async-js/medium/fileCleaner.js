const fs = require('fs')

const filePath = 'a.txt'

async function cleanFile(path) {
    const data = await getDataFromFile(path)
    const cleanedRawData = data.split(' ').filter((a) => {
        return a.length > 0
    })
    const cleanData = cleanedRawData.join(' ')
    fs.writeFile(path,cleanData,(err) => {
        if (err) {
            console.error('error !!', err)
        } else {
            console.log('File is cleaned')
        }
    })
}

function getDataFromFile(path) {
    return new Promise((resolve,reject) => {
        fs.readFile(path,'utf-8',(err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

cleanFile(filePath)
