const express = require('express');

const router = express.Router();

const Policy = require('../Models/Policy');

//get list of all policys

router.get('/', async (req, res) => {
    try {
        const policyList = await Policy.find();
        res.json(policyList);
    } catch (error) {
        res.json({ message: error });
    }
});

//create a new policy
router.post('/', async (req, res) => {
    const policyReq = new Policy({
        scannerCriteria: req.body.scannerCriteria,
        action: req.body.action,
        directory: req.body.directory,
        targetGroupId: req.body.targetGroupId,
        isActive: req.body.isActive
    });
    try {
        const savedPolicy = await policyReq.save();
        res.json(savedPolicy)
    }
    catch (error) {
        res.json({ message: error });
    }
});

//[update] activate or deactivate a policy
router.patch('/:policyId', async (req, res) => {
    try {
        const updatedPolicy = await Policy.updateOne(
            { _id: req.params.policyId },
            {
                $set: {
                    scannerCriteria: req.body.scannerCriteria,
                    action: req.body.action,
                    directory: req.body.directory,
                    targetGroupId: req.body.targetGroupId,
                    isActive: req.body.isActive
                }
            }
        );
        res.json(updatedPolicy);
    } catch (error) {
        res.json({ message : error})
    }
})

//find a policy by id
router.get('/search/:policyId', async (req, res) => {

    try {
        const policyObj = await Policy.findById(req.params.policyId);
        res.json(policyObj);
    } catch (error) {
        res.json({ message: error });
    }
});

//find all active policies 
router.get('/active', async (req, res) => {
    try {
        const activePolicyList = await Policy.find({isActive:true});
        res.json(activePolicyList);
    } catch (error) {
        res.json({ message: error });
    }
});


//delete a policy
router.delete('/:policyId', async (req, res) => {
    try {
        const removedPolicy = await Policy.remove({ _id: req.params.policyId });
        res.json(removedPolicy);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;