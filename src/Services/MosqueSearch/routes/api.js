const express = require('express');
const router = express.Router();
const MosqueSearchController = new (require('../Controllers/MosqueSearchController'));

router.get('/', MosqueSearchController.index);

module.exports = router