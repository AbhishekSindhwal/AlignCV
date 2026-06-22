const mongoose = require('mongoose');

/**
 * -job description schema: text
 * -resume text: text
 * -Self description: text
 * 
 * 
 * -matchScore:Number
 * -Technical Questions :[{
 *      question:"",
 *      intention:"",
 *      answer:""
 * }]
 * -Behavioral Questions:[{
 *      question:"",
 *      intention:"",
 *      answer:""
 * }]
 * -Skills Gaps:[{
 *      skill:"",
 *      severity:{
 *          type:String,
 *          enum:["low","medium","high"]
 *      }
 * }]
 * -Preparation plan:[{
 *      day:Number,
 *      focus:String,
 *      tasks:[String]
 * }]
 */
const technicalQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technical Question is required"],
    },
    intention: {
        type: String,
        required: [true, "Intention is reuquired"]
    },
    answer: {
        type: String,
        reuired: [true, "Answer is required"]
    }
},
    {
        _id: false
    })


const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technical Question is required"],
    },
    intention: {
        type: String,
        required: [true, "Intention is reuquired"]
    },
    answer: {
        type: String,
        reuired: [true, "Answer is required"]
    }
},
    {
        _id: false
    })

const skillGapsSchema = new mongoose.Schema({
    skill: {
        type: String,
        reuired: [true, "Skill is reuired"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        reuired: [true, "Severity is reuired"]
    }
}, {
    _id: false
})

const preparationPlanSchema=new mongoose.Schema({
    day:{
        type:Number,
        reuired:[true,"Day is required "]
    },
    focus:{
        type:String,
        required:[true,"Focus is required"]
    },
    tasks:[{
        type:String,
        required:[true,"Task is required"]
    }]
},{
    _id:false
})


const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestions:[technicalQuestionsSchema],
    behavioralQuestions:[behavioralQuestionSchema],
    skillGaps:[skillGapsSchema],
    preparationPlan:[preparationPlanSchema],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String,
        description:"The title of the job for which the interview report is generated."
    },
},{
    timestamps:true
})

const interviewReportModel=mongoose.model("InterviewReport",interviewReportSchema);
module.exports=interviewReportModel;