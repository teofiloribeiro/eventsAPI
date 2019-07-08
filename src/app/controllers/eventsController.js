const express= require('express');
const authMiddleware = require('../middlewares/auth');

const Event = require('../models/Event');

const router = express.Router();
router.use(authMiddleware);


router.get('/',async (req,res)=>{
    try{
        const events = await Event.find().populate('createBy');
        return res.send({events})
    }catch(err){        
        return res.status(400).send({ error: 'Error loading Events' });
    }
});
router.get('/myEvents', async(req,res)=>{
    try{
        const events = await Event.find({createBy: req.userId});
        return res.send({events});
    }catch(err){
        return res.status(400).send({ error: 'Error loading User Events' });
    }
});


router.get ('/:eventId', async(req,res)=>{
    try{
        const event = await Event.findById(req.params.eventId).populate('createBy');
        return res.send({event})
    }catch(err){
        console.log (err)
        return res.status(400).send({error: 'Error loading Event'})
    }
});

router.post('/',async (req,res)=>{
    try{
        const event = await Event.create({...req.body, createBy: req.userId});
        return res.send(event);

    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Error creating new Event' });
    }
});

router.put('/:eventId',async (req,res)=>{
    try{
        const event = await Event.findByIdAndUpdate(req.params.eventId,{...req.body},{new: true});
        return res.send(event);

    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Error updating new Event' });
    }
});


router.delete ('/:eventId', async(req,res)=>{
    try{
        const event = await Event.findOneAndRemove(req.params.eventId);
        return res.send()
    }catch(err){
        console.log (err)
        return res.status(400).send({error: 'Error deleting Event'})
    }
});

module.exports = app =>app.use('/events',router)