const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('public/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log(`listening on port ${port}!`));