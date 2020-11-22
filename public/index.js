/* eslint-disable no-console */
require('module-alias/register');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT_NODE || process.env.PORT || 8000;

app.use(cors());

app.use('/api', require('@route'));
app.use('/static', express.static(path.join(__dirname, '/../asset')));

app.listen(port, () => {
    console.log('We are live on ' + port);
});
