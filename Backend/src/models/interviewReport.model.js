const mongoose=require('mongoose');

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
const interviewReportSchema=new mongoose.Schema({
    
})