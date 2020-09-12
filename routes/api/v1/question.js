const express = require('express');
const router = express.Router();
const questionApi = require('../../../controllers/api/v1/questionBank_api');



//route for insert the Question
router.post('/insertquestion', questionApi.createQuestion); 

//route for showing all the questions
router.get('/allquestions' , questionApi.list);

//route for showing all the questions filtered by Tags 
router.get('/question/:Tags' , questionApi.filtered);

module.exports = router;