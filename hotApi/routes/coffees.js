// steps
// require express and router
// define routes but use router.get instead of app.get
// export module

const express = require('express')
      router = express.Router();

router.get('/african', (req,res) => {
    res.send('this is african coffee');
});

router.get('/american', (req, res) => {
    res.send('this is american coffee');
});

router.post('/american', (req, res) => {
    res.send('you posted an american coffee');
});

router.delete('/american', (req, res) => {
    res.send('you just deleted an american coffee');
})

router.put('/american', (req, res) => {
    res.send('you just changed an american coffee');
})

module.exports = router;