/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

async function getFiles() {
  return new Promise((resolve,reject) => {
    const dirPath = path.join(__dirname,'./files/')
    fs.readdir(dirPath,(err,files) => {
      if(err) {
        console.log('Error reading files')
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

async function getData(file) {
  return new Promise((resolve,reject) => {
    const filepath = path.join(__dirname, './files/', file);
    fs.readFile(filepath, 'utf-8', (err,data) => {
      if(err) { 
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

app.get('/',(req,res) => {
  console.log('hello connected')
  res.status(200).json({
    msg: 'App is Listening'
  })
})

app.get('/files',(req,res) => {
  res.status(200).json(files)
})

app.get('/file/:filename',(req,res) => {
  const filename = req.params.filename
  const file = files.find((file) => file === filename)
  if(!file) {
    res.status(404).send('File Not Found')
  } else {
    getData(file).then((data) => {
      res.status(200).send(data)
    })
  }
})

app.use((req, res, next) => {
  res.status(404).send({msg: "Data Not found!"});
});

var files = []
async function getNames() {
  files = await getFiles()
}
files = getNames()

app.listen(3000)

module.exports = app;