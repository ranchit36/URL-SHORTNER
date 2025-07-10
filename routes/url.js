const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl } = require('../controller/url');

router.post('/url', shortenUrl);
router.get('/:shortId', redirectUrl);

module.exports = router;