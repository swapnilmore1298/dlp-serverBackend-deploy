const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');
//Import Routes
const incidentsRoutes = require('./Routes/incidentRoutes');
const clientRoutes = require('./Routes/clientRoutes');
const loginRoutes = require('./Routes/loginRoutes');
const policyRoutes = require('./Routes/policyRoutes');
const targetGroupRoutes = require('./Routes/targetGroupRoutes');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/incidents',incidentsRoutes);
app.use('/clients',clientRoutes);
app.use('/login',loginRoutes);
app.use('/policy',policyRoutes);
app.use('/targetGroup',targetGroupRoutes);

//Routes

app.get('/',(req,res)=>{
    res.send('We are on home');
})

//connect to db

mongoose.connect(
    process.env.db_connection,
    (suc)=>{
    console.log("Connection established with db!");
});

//Listener
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);