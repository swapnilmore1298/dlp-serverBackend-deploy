const express = require('express');

const router = express.Router();

const Incident = require('../Models/Incident');
const Policy = require('../Models/Policy');
const Client = require('../Models/Client');


//Get list of all incidents

router.get('/', async (req, res) => {
    try {
        const incidentList = await Incident.find();
        var newInciList = [];
        await Promise.all(incidentList.map(async (incidObject) => {
            const clientObj = await Client.findOne({hostName : incidObject.hostName});
            const policyObj = await Policy.findById(incidObject.policyId);
            let newInci = JSON.parse(JSON.stringify(incidObject));
            newInci.client = clientObj;
            newInci.policy = policyObj;
            newInciList.push(newInci);
        }));
        res.json(newInciList);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const incidentRequest = new Incident({
        hostName: req.body.hostName,
        policyId: req.body.policyId
    });
    try {
        const savedIncident = await incidentRequest.save();
        res.json(savedIncident);
    }
    catch (error) {
        res.json({ message: err })

    }
});

//get specific incident
router.get('/:incidentId', async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.incidentId);

        res.json(incident)
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;