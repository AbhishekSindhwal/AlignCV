import {getAllInterviewReports, generateInterviewReport, getInterViewReportById} from "../services/interview.api"
import { useContext } from "react"
import { InterviewContext } from "../interview.context"




export const useInterview=()=>{
    const context = useContext(InterviewContext)
}