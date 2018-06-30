const fs = require('fs');
const path = require('path')

function travel(dir, cb) {
    if(!fs.statSync(dir).isDirectory()){
        throw new Error(dir + ' is not a directory');
    }

    fs.readdirSync(dir).forEach(item => {
        let pathName = path.join(dir, item);
        if(fs.statSync(pathName).isDirectory()){
            travel(pathName, cb);
        } else {
            cb(pathName)
        }
    })
}

travel(process.argv[2], (name) => {
    console.log(name)
})