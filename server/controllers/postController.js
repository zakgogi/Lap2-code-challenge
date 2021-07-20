const express = require('express');
const router = express.Router();

const Post = require('../models/posts.js');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.all;
        res.json({allPosts});
    } catch(error) {
        res.status(500).json({error});
    }
});

module.exports = router;