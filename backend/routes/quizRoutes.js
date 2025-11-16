import  User from"../models/User.js";
import  Quizes from "../models/Quizes.js"
import  {hideConsoleLogInProduction} from "../lib/helper.js"
const  getQuizes= async (req,res)=>{

    try {
        const {subject_id,user_id}=req.params
if(!subject_id && user_id){
    return res.status(401).json("Subject id and user_id are required");
}

const checkIfUserExists=await User.findOne({_id:user_id});
if(!checkIfUserExists){
    return res.json("Unauthorised request")
}

const checkIfQuizesExistForSubject=await Quizes.find({subject_id,user_id})
if(!checkIfQuizesExistForSubject){
    return res.json("No quizes found for the subject")
}
return checkIfQuizesExistForSubject
    } catch (error) {
        hideConsoleLogInProduction("Quizes error: ",error)
    }

}

export default getQuizes