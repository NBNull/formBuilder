const express = require('express');
const path = require('path');
const formController = require('../controllers/formController');

const router = express.Router();

// 是这样写吗
router.post('/addForm', formController.addForm);
router.get('/getList', formController.getList);
router.get('/getFormData', formController.getFormData);

module.exports = router;
