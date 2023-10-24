const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');


const url = "mongodb+srv://syneradmin:NoSaCh789@cluster0.qlfgxfu.mongodb.net/test"


router.get('/', async (req, res) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db('mydatabase');
  const announcements = await db.collection('announcements').find({}).toArray();

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(announcements));
});

router.post('/', async (req, res) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db("mydatabase");
  const announcement = { id: uuid.v4(), text: req.body.text, date: new Date(), author: "Author"};
  await db.collection("announcements").insertOne(announcement);
    res.redirect('/');
})

module.exports = router;
