const express = require('express');

const router = express.Router();

const Client = require('../Models/Client');

//get list of all clients

router.get('/', async (req, res) => {
    try {
        const clientList = await Client.find();
        res.json(clientList);
    } catch (error) {
        res.json({ message: error });
    }
});

//create a new client
router.post('/', async (req, res) => {
    const clientReq = new Client({
        hostName: req.body.hostName,
        targetGroupId: req.body.targetGroupId
    });
    try {
        const savedClient = await clientReq.save();
        res.json(savedClient)
    }
    catch (error) {
        res.json({ message: error });
    }
});

//find a client by id
router.get('/:clientId', async (req, res) => {

    try {
        const clientObj = await Client.findById(req.params.clientId);
        res.json(clientObj);
    } catch (error) {
        res.json({ message: error });
    }
});

//delete a client
router.delete('/:clientId',async(req,res)=>{
    try {
        const removedClient = await Client.remove({_id: req.params.clientId});
        res.json(removedClient);
    } catch (error) {
        res.json({ message : error });
    }
}); 

module.exports = router;