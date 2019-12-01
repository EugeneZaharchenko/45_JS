var fs = require('fs');

const path = './try_node';

// fs.rmdir('try');

if (!(fs.existsSync(path))) {
    try {
        fs.mkdir(path, {recursive: true}, (err) => {
            if (err) throw err;
        })
    } catch (err) {
        console.error(err);
    }
}

try{
    fs.writeFile(path + "/file.tmp", "data", function(err){
        if(err)throw err;

        fs.rename(path + "/file.tmp", path + "/new.tmp", function(err){
            if(err) throw err;
        });

    });
}catch(err){
    console.error(err);
}

if(fs.existsSync(path + "/new.tmp")) {
    try{
        fs.appendFile(path + "/new.tmp", 'data to append', (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
        // fs.unlink("new.tmp", function(err)
    }catch(err){
        console.error(err);
    }
}

const watcher = fs.watch(__dirname, (event, filename) => {
    console.log(event);
    console.log(filename);
});

watcher.on('error', error => console.log(error));


