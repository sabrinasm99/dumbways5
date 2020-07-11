// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Database = require('better-sqlite3')('dwtube.db', {verbose: console.log});

export default (req, res) => {
  if (req.method === 'GET'){
    const video = Database.prepare('SELECT * from category_tb').all();
    res.statusCode = 200
    res.json(video)
  } else if (req.method === 'POST'){
    Database.prepare('INSERT into category_tb (name) values (?)').run(
      req.body.name
    )
    res.statusCode = 200
    res.send('Success Insert')
  }
}