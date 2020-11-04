/* eslint-disable no-console */
require('module-alias/register');
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT_NODE || process.env.PORT || 8000;

app.use(cors());

app.use('/api', require('@route'));

app.listen(port, () => {
    console.log('We are live on ' + port);
});
