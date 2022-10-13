const express = require('express')
const router = express.Router()
const { Post } = require('../models')

// get all posts route
router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find({});
        console.log(posts);
        return res.json({posts: posts});
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const foundPost = await Post.findById(req.params.id)
        return res.json(foundPost)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const createdPost = await Post.create(req.body);
        console.log(`The created product is ${createdPost}`)
        return res.json({message: `${createdPost} was created`})
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

router.delete('/:id', async (req,res, next)=>{
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        console.log(deletedPost);
        return res.json({message: `${deletedPost} was deleted`})
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

router.put('/:id', async (req, res, next)=>{
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedPost);
        return res.json({message: `The post was updated to ${updatedPost}`})
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router