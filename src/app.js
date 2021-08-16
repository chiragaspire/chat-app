const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

const publicPath=path.join(__dirname,'../public')
app.use(express.static(publicPath));

module.exports = app;