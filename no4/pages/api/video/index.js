// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multer from "multer";
import formidable from 'formidable-serverless';

export const config = {
  api: {
    bodyParser: false,
  },
};

const Database = require('better-sqlite3')('dwtube.db', {verbose: console.log});


export default (req, res) => {
  if (req.method === 'GET'){
    const video = Database.prepare('SELECT t1.*, t2.name as kategori from video_tb t1 LEFT JOIN category_tb t2 ON t2.id = t1.category_id').all();
    res.statusCode = 200
    res.json(video)
  } else if (req.method === 'POST'){
    // console.log(req.body.title)
    const obj = {};
    const form = new formidable.IncomingForm();
    form.on('fileBegin', (name, file) => {
      // console.log(name);
      if (name === 'attacheFile')
      file.path = "./public/video/" + file.name
      else if (name === 'thumbnailFile')
      file.path = "./public/image/" + file.name
    })    

    form.on('field', (name, field) => {
      obj[name] = field;
    })
    form.parse(req, (err, fields, files) => {
      Database.prepare('INSERT into video_tb (title, category_id, attache, thumbnail) values (?,?,?,?)').run(
        obj.title,
        obj.category_id,
        obj.attache,
        obj.thumbnail
      )
    })
    res.statusCode = 200
    res.end()
  }
}