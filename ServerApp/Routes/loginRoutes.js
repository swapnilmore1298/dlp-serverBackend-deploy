const express = require('express');

const router = express.Router();

const Admin = require('../Models/Admin');

//Verify password and login id from user
router.get('/:loginId', async (req, res) => {

    try {
        const login = await Admin.findById(req.params.loginId);
        res.json(AdminObj);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const AdminList = await Admin.find();
        res.json(AdminList);
    } catch (error) {
        res.json({ message: error });
    }
});


//create a new Admin
router.post('/', async (req, res) => {
    const AdminReq = new Admin({
        username: req.body.username,
        password: req.body.password
    });
    try {
        const savedAdmin = await AdminReq.save();
        res.json(savedAdmin)
    }
    catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;