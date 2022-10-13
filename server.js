require('dotenv').config()
require('./config/db.connection');
const express = require('express');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const cors = require('cors');
const { connections, posts, potentialConnections, users } = require('./controllers')
const app = express();

const {MONGODB_URI, PORT } = process.env;
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); //parse json
app.use(cors());

app.use(
    session({
        store: MongoStore.create({ mongoUrl: MONGODB_URI }),
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        // configure the experation of the cookie
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
        },
    })
);


// CONTROLLERS 

app.use('/connections', connections) // connections router
app.use('/potential-connections', potentialConnections) // potential connections controller
app.use('/', users) // auth controller
app.use('/posts', posts) // posts controller

// Products "Home" route 

app.get('*', (request, response) => response.send('Wrong URL, make sure it is a valid request'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))