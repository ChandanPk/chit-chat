const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

//connecting with DB 
mongoose.connect(process.env.MONGOOSE_CONNECT)
    .then(()=> {
        console.log("Connected to DB");
    })
        .catch(err => {
            console.log(err.message);
        })

// middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res)=> {
    res.send("Home page!");
})

app.listen(8000, ()=> {
    console.log('server up and running on port 8000!');
})
