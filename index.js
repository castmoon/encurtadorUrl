const express = require('express');
const app = express();
require('./config/database');
const Link = require('./src/models/url');

const routerTeste = require('./src/routes/index');

app.use(express.json());

app.use(async (req, res, next) => {
  let { url } = req;
  if (url != '/') {
    let savedUrl = await Link.find({ "urlCode": url });
    if(savedUrl) {
      try {
        let link = savedUrl[0].link;
        let { headers } = req;
        let { host } = headers;
        console.log(host);
      }catch (e) {
      res.status(400).json(e);
      }
    }else { 
        res.status(400).json({break: true})
      }
    }
next();
});

app.use('/', routerTeste);




app.listen(3000, () => console.log('backend iniciado =)'));