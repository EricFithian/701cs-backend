const express = require('express')
const router = express.Router()

// MODELS
const {Connection} = require('../models')

router.get('/', async (req,res, next)=>{
    try {
        const allConnections = await Connection.find({})
        res.json(allConnections)
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

// create - POST route 
router.post('/', async (req,res, next)=>{
    try{
        const newConnection = await Connection.create(req.body)
        console.log(newConnection)
        res.redirect(`/potential-connections/${newConnection._id}`)
        // return user to product detail page -> 
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.get('/:connectionId', async (req,res, next)=>{
    try {
        const foundConnection = await Connection.findById(req.params.connectionId)
        res.json({foundConnection: foundConnection})
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.get('/my-connections/:myId', async (req,res, next)=>{
    try{
       let myConnections = await Connection.find({user1: req.params.myId});
       console.log(myConnections);
       return res.json(myConnections)
    } catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

// destroy - delete 
router.delete('/:connectionId', async (req,res, next)=>{
    try{
       let deletedConnection = await Connection.findByIdAndDelete(req.params.connectionId);
       console.log(deletedConnection);
    } catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router