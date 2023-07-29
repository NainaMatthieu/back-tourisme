const express = require('express');
const app = express();

const cors  = require('cors');
const bodyParser = require('body-parser');
require('./util/DBConnexion');

app.use(bodyParser.json());
app.use(cors());

const videoRoute = require("./router/VideoList");
app.use('/vid',videoRoute);

app.listen(9000);