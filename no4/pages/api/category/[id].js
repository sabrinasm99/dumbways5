// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Database = require('better-sqlite3')('dwtube.db', {verbose: console.log});

export default (req, res) => {
   if (req.method === 'PUT'){
      console.log(`UPDATE category_tb SET ${Object.keys(req.body).map(val => `${val}=?`).join(',')} where id = ${req.query.id}`)
      Database
      .prepare(
        `UPDATE category_tb SET ${Object.keys(req.body).map(val => `${val}=?`).join(',')} where id = ?`)
        .run([...Object.values(req.body), req.query.id]);

      res.statusCode= 200
      res.send('Success Update')       
    }
    else if (req.method === 'DELETE'){
        Database.prepare(`DELETE FROM category_tb WHERE id = ?`).run(req.query.id)
        res.statusCode = 200
        res.send('Success Delete')
    }
}