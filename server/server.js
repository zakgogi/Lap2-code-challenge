const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


const port = process.env.PORT || 3000;
const postRoutes = require('./controllers/postController');
// Root route
server.get('/', (req, res) => res.send('Hey, welcome to our server!'));
server.use('/posts', postRoutes);

module.exports = server;