const router = require('express').Router();

router.get('/user1', (req, res)=> {
    res.send("users Home");
})

module.exports = router;