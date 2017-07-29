// steps
// require express and router
// define routes but use router.get instead of app.get
// export module

const express = require('express'),
    router = express.Router();

router.get('/coke', (req,res) => {
    res.send('you got a coke');
});

module.exports = router;
