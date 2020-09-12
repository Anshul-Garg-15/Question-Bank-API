const express = require('express');
const router = express.Router();

router.use('/Questions', require('./question'));



module.exports = router;