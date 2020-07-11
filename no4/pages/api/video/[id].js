// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Database = require('better-sqlite3')('dwtube.db', {verbose: console.log});

export default (req, res) => {
  if (req.method === 'GET'){
      console.log(req.query.id);
      const video = Database.prepare('SELECT * from video_tb WHERE id=?').get(req.query.id);
      if (video){
          res.statusCode = 200
          res.json(video)
      } else {
          res.statusCode = 400
          res.send('Bad Request')
      }
  } else if (req.method === 'PUT'){
      console.log(`UPDATE video_tb SET ${Object.keys(req.body).map(val => `${val}=?`).join(',')} where id = ${req.query.id}`)
      Database
      .prepare(
        `UPDATE video_tb SET ${Object.keys(req.body).map(val => `${val}=?`).join(',')} where id = ?`)
        .run([...Object.values(req.body), req.query.id]);

      res.statusCode= 200
      res.send('Success Update')       
    }
    else if (req.method === 'DELETE'){
        Database.prepare(`DELETE FROM video_tb WHERE id = ?`).run(req.query.id)
        res.statusCode = 200
        res.send('Success Delete')
    }
}