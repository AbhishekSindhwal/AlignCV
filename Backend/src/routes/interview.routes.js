const express=require("express")
const authMiddleware=require("../middlewares/auth.middleware")
const interviewRouter=express.Router()
const upload=require("../middlewares/file.middleware")
const interviewController=require("../controller/interview.controller")

/**
 * @route POST /api/interview/
 * @description generate new intereview report on the basis of  user self description, resume pdf and job description.
 * @access private
 */
interviewRouter.post("/",authMiddleware.authUser,upload.single("resume"),interviewController.generateInterViewRepostController)


/**
 * @route GET /api/interview/report/:interviewId
 * @description get interview report by interview id.
 * @access private
 */
interviewRouter.get("/report/:interviewId",authMiddleware.authUser,interviewController.getInterViewReportByIdController)
 


/**
 * @route GET /api/interview/
 * @description  get all interview reports of logged in user.
 * @access private
 */
interviewRouter.get("/",authMiddleware.authUser,interviewController.getAllInterviewReportsController)

module.exports=interviewRouter


