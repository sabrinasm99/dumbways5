const Database = require('better-sqlite3')('dwtube.db', {verbose: console.log});

Database.prepare(
"INSERT INTO video_tb (title, category_id, attache, thumbnail) VALUES ('Upin Ipin', 2, 'http://video.com/kartun.mp4', 'pict.jpg')").run()
console.log(Database.prepare('SELECT * FROM video_tb').all())
