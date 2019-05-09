const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const cors = require('cors');

const db = require('../database/index.js');

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/newResult', (req, res) => {
  db.findResultAndUpdate(req.body)
    .then((result) => {
      const newDoc = result.lastErrorObject.updatedExisting;
      if (!newDoc){
        res.status(201).json(result);
      }
      if (newDoc) {
        res.status(202).json(result);
      }
    })
    .catch((error) => {
      console.error(error.stack);
      res.sendStatus(501)
  })
})

app.listen(port, () => console.log(`listening on port ${port}!`));