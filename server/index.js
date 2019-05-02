const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';

//middleware and routes
const { provider } = require('./middleware/provider');

//NextJS configuration
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

//Setup NextJS Server
nextApp
    .prepare()
    .then(() => {
        //express code here
        const app = express();

        //apply middleware
        provider(app);
    })