const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';

//middleware provider
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

        //get all of the react stuff
        app.get('*', (req, res) => {
            return handle(req, res);
        });

        //get the server listening
        app.listen(PORT, err => {
            if (err) throw err;
            console.log('Express/Next server is firing on all cylinders 🔥');
        });
    });