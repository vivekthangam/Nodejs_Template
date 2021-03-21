// Include fs and path module 
const fs = require('fs');
const path = require('path');

var obj = {
    controller: {
        fle: ["index.js"]
    },
    model: {
        fle: ["index.js"]
    },

    routes: {
        fle: ["index.js"]
    },
};

for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        var val = obj[key];

        for (var key1 in val) {
            // console.log(key, ":", val[key1]);


            val[key1].forEach(item => {
                console.log(item)
                var file = `./${key}/${item}`;
                if (!fs.existsSync(file)) {
                    fs.mkdir(path.join(__dirname, key), (err) => {
                        if (err) {
                            return console.error(err);
                        }
                        fs.writeFile(file, 'This is my text', function(err) {
                            if (err) throw err;
                            console.log('Results Received');
                        });



                        console.log('Directory created successfully!');
                    });
                }
            })


        }

    }
}