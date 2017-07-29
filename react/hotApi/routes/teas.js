// steps
// require express and router
// define routes but use router.get instead of app.get
// export module

const express = require('express'),
    router = express.Router();
    
    

router.get('/chinese', (req, res) => {
    res.send('you got chinese tea');
});

router.get('/indian', (req,res) => {
    res.send('you got indian teas');
});

router.post('/indian', (req,res) => {
    res.send('you added some indian tea');
});

router.put('/indian', (req,res) => {
    res.send('you edited an indian tea')
});

router.delete('/indian', (req, res) => {
    res.send('you just deleted an indian tea')
})

module.exports = router;