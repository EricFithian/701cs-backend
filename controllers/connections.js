const express = require('express')
const router = express.Router()

// MODELS
const {Connection} = require('../models')

/*  Beginning of Connection routes */

// // get all products route
// router.get('/', async (req, res, next) => {
//     try {
//         const connections = await Connection.find({});
//         const context = { connections }
//         console.log(context);
//         return res.json(context);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// router.get('/:id/', async (req, res, next) => {
//     try {
//         const foundConnections = await Connection.find({$or: 
//             [{user1: req.params.id}, {user2: req.params.id}]
//         })
//         return res.json({connections: foundConnections})
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.post('/', async (req, res, next) => {
//     try {
//         const createdConnection = await Connection.create(req.body);
//         console.log(`The created connection is ${createdConnection}`)
//         res.redirect('/connections');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.delete('/:id', async (req,res, next)=>{
//     try {
//         const deletedProduct = await db.Product.findByIdAndDelete(req.params.id);
//         // delete one product (req.params.id)
//         // find all reviews where product == req.params.id | delete those as well
//         const deletedReviews = await db.Review.deleteMany({product: req.params.id})
//         // confirming the deletion of reviews 
//         // 'orphan' documents in our reviews collection are removed

//         console.log(deletedReviews);
//         return res.redirect('/products')
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.put('/:id', async (req, res, next)=>{
//     try {
//         const updatedProduct = await db.Product.findByIdAndUpdate(req.params.id, req.body);
//         console.log(updatedProduct);
//         return res.redirect(`/products`)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })


module.exports = router