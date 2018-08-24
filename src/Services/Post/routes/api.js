const express = require('express');

var router = express.Router();

router.get('/post', (req, res) => {
	res.json({
		message: "Post page"
	});
})


module.exports = router;
