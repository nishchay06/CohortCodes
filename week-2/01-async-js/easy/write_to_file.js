const fs = require('fs')

const data = 'hellloooo'

fs.writeFile('a.txt',data,(err) => {
    if(err) {
        console.error('error!!!' , err)
    } else {
        console.log('done!!')
    }
})