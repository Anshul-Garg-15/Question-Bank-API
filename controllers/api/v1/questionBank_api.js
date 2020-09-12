const Question = require('../../../model/questionBank');

//this will create the question
module.exports.createQuestion = function (req, res) {


    Question.create({
        Query: req.body.Query,
        Topic: req.body.Topic,
        Tags: req.body.Tags
    }, function (err, question) {

        if (err) {
            console.log("error in creating report ", err);
            return;
        }

        return res.json(200 , {
            data:{
                question: question
            },
            message: "Question insert in the question bank"

        });

    });

}
//this will show all the questions of the question bank 
module.exports.list = function(req,res){

    
        Question.find({}, function(err,questions){
            return res.json(200, {
                message: "List of Questions",
                questions: questions               
            });
        }).sort('createdAt');
    
}



//this  will show the questions filtered by text
module.exports.filtered = async function(req, res) {

    let searchQuestion = await Question.find({Tags:req.params.Tags});

    return res.json(200, {
        message: "Filtered Questions",
        searchQuestion:searchQuestion
    });
}

