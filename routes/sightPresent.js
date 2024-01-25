const express = require('express');
const router = express.Router();
const sightController = require('../controllers/sightPresentController')

//Get All
//router.get('/',sightController.getAllTodos)

//Create Todo

router.get('/sights',sightController.getSightsByZone);



module.exports = router;
