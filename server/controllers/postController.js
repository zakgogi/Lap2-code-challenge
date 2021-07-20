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

router.post('/', async (req, res) => {
    try {
        console.log('here');
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
})

// router.post('/', async (req, res) => {
//     try {
//         const dog = await Dog.create(req.body.name, req.body.age)
//         res.json(dog)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })


module.exports = router;