const express = require('express');
const router = express.Router();
const { getRandomInt, makeURL } = require('../services/index');
const Link = require('../models/url');


router.get('/', async (req, res) => {
  try {
    let links = await Link.find({});
    res.status(200).json({links});
  }catch(e) {
    res.status(400).json({error: e });
  }
});

router.post ('/', async (req, res) => {
  let { url } = req.body;
  let code = makeURL(getRandomInt(5, 10));
  let encurtedUrl = `localhost:3000${code}`;
  try {
    let link = await Link.create({link: url, urlCode: code, encurtedUrl: encurtedUrl});
    res.status(200).json(link);
  }catch(e) {
    res.status(400).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  let code = req.url;
  console.log(code);
  try {
  let deleteUrl = await Link.deleteOne({ "urlCode": code });
  res.status(200).json(deleteUrl);
  }catch(e) {
    res.status(400).json(e);
  }
})

module.exports = router;