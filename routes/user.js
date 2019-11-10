const express = require('express');
const router = express.Router();

router.get('/arun', function(req, res){
    res.json({name:"arun"});
});

module.exports = router;