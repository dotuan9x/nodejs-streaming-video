// Libraries
const express = require('express');
const router = express.Router();

router.use('/stream', require('./stream'));

router.use('/ping', (req, res) => res.send('pong'));

router.use('/', (req, res) => res.send('Hello world'));

module.exports = router;
