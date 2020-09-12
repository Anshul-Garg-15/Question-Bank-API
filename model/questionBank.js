const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    Query:{
        type:String,
        required:true,
    },
    Topic:{
        type:String,
        required:true
        // enum: ['qualifying-criteria' , 'top-colleges']
    },
    Tags: {
        type:String,
        required:true
        // enum:['usa', 'engineering' , 'top' , 'admission' , 'standford-university']
    },
},{
    timestamps:true
});

const Question = mongoose.model('Question' , questionSchema);

module.exports = Question;