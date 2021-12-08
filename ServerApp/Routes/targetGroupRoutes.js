const express = require('express');

const router = express.Router();

const TargetGroup = require('../Models/TargetGroup');

//get list of all targetGroups

router.get('/', async (req, res) => {
    try {
        const targetGroupList = await TargetGroup.find();
        res.json(targetGroupList);
    } catch (error) {
        res.json({ message: error });
    }
});

//create a new targetGroup
router.post('/', async (req, res) => {
    const targetGroupReq = new TargetGroup({
        groupName: req.body.groupName
    });
    try {
        const savedTargetGroup = await targetGroupReq.save();
        res.json(savedTargetGroup)
    }
    catch (error) {
        res.json({ message: error });
    }
});

//find a targetGroup by id
router.get('/:targetGroupId', async (req, res) => {

    try {
        const targetGroupObj = await TargetGroup.findById(req.params.targetGroupId);
        res.json(targetGroupObj);
    } catch (error) {
        res.json({ message: error });
    }
});

//delete a targetGroup
router.delete('/:targetGroupId',async(req,res)=>{
    try {
        const removedTargetGroup = await TargetGroup.remove({_id: req.params.targetGroupId});
        res.json(removedTargetGroup);
    } catch (error) {
        res.json({ message : error });
    }
}); 

module.exports = router;