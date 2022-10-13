const express = require('express')
const router = express.Router()
const { PotentialConnection } = require('../models')

router.get('/', async (req,res, next)=>{
    try {
        const allPotentialConnections = await PotentialConnection.find({})
        res.json(allPotentialConnections)
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

// create - POST route 
router.post('/', async (req,res, next)=>{
    try{
        const newPotentialConnection = await PotentialConnection.create(req.body)
        console.log(newPotentialConnection)
        res.redirect(`/potential-connections/${newPotentialConnection._id}`)
        // return user to product detail page -> 
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

router.get('/:connectionId', async (req,res, next)=>{
    try {
        const foundPotentialConnection = await PotentialConnection.findById(req.params.connectionId)
        res.json({foundPotentialConnection: foundPotentialConnection})
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})


// destroy - delete 
router.delete('/:connectionId', async (req,res, next)=>{
    try{
       let deletedConnection = await PotentialConnection.findByIdAndDelete(req.params.connectionId);
       console.log(deletedConnection);
    } catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router