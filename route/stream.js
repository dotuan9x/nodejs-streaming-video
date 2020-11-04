// Libraries
const express = require('express');
const router = express.Router();

// Module
const StreamModule = require('@module/stream');

// Routes
const routes = {
    index: '/'
};

router.get(routes.index, (req, res) => StreamModule.get(req, res));

module.exports = router;
