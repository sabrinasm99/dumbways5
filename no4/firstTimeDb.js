const Database = require('better-sqlite3');
const fs = require('fs');

const filename = 'dwtube.db';

const isExist = fs.existsSync(`./${filename}`, 'utf-8');

if (isExist){
  console.log('DB Already Initialized');  
} else {
    const db = new Database(filename, { verbose: console.log });
    console.log(db);
    const migration = fs.readFileSync('./migrations/init.sql', 'utf-8');
    db.exec(migration);
    db.close();
}







