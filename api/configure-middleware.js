const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
// const cors = require('cors');

const sessionConfig = {
    name: 'monkey', // sid
    secret: 'keep it secret, keep it safe!',
    cookie: {
        maxAge: 1000 * 30,
        secure: false, //should be true in production
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
};

module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(session(sessionConfig));
    //   server.use(cors());
};