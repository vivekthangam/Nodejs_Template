// Node.js program to demonstrate the    
// fs.mkdir() Method 

// Include fs and path module 
const fs = require('fs');
const path = require('path');

var dir = ['middeware', 'controller', 'model', 'route'];
var model = "vivek";

var temple = `Hello there ${model}`;

console.log(temple);
dir.forEach(item => {
    console.log(item)
    if (!fs.existsSync(item)) {
        fs.mkdir(path.join(__dirname, item), (err) => {
            if (err) {
                return console.error(err);
            }
            var file = `./${item}/index.js`;

            console.log(file);

            fs.writeFile(file, 'This is my text', function(err) {
                if (err) throw err;
                console.log('Results Received');
            });



            console.log('Directory created successfully!');
        });
    }
})