const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';

//NextJS configuration
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();