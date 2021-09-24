const router = require('express').Router();
const User = require('../models/UserModel')

router.get('/', (req, res)=> {
    User.create({
        name: "chandan paul",
        email: "chandanpaul@gmail.com",
        profilePic: "null",
        coverPic: "lowl",
        isAdmin: true,
        password: "dhinchak pooja"
    })
        .then((data)=> {
            console.log(data);
            res.send(data);
        })
            .catch(err => {
                err.catch(err.meggage);
            })
})

module.exports = router;