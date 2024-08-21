var fs = require('fs');

async function createfile(){
   await fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}


createfile();