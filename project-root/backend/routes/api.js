const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/user/:login', apiController.getUser);
router.get('/user/:login/cursus', apiController.getUserCursus);
router.get('/campus/:campus_id/users', apiController.getCampusUsers);

module.exports = router;
