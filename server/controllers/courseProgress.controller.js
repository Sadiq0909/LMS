import { CourseProgress } from "../models/courseProgress.js";
import {Course} from "../models/course.model.js"


export const getCourseProgress =async (req,res)=>{
    try {
        const {courseId} = req.params;
        const userId = req.id ;
        // Fetch course progress
        let courseProgress = await CourseProgress.findOne({courseId , userId}).populate("courseId"); 
        const courseDetails = await Course.findById(courseId);
        if(!courseDetails){
            return res.status(404).json({
                message : "Course not found" , 
            })
        }

        //  Return course details if no progress is found
        if(!courseProgress){
            return res.status(200).json({
                data  : {
                    courseDetails , 
                    progress : [] ,
                    completed  : false 
                }
            })
        }

        //  return user course progress with course details
        return res.status(200).json({
            data  : {
                courseDetails , 
                progress : courseProgress.lectureProgress ,
                completed  : courseProgress.completed 
            }
        })
    } catch (error) {
        console.log(error);
        
    }
}


export const updateLectureProgress = async(req,res)=>{
    try {
        const {courseId , lectureId} = req.params ; 
        const userId = req.id; 

        // Fetch or create progress
        let courseProgress = await CourseProgress.findOne({courseId , userId}) ; 

        if(!courseProgress){
            courseProgress = new CourseProgress({
                userId , courseId , lectureProgress : [] ,completed : false 
            })
        }
        // Find lecture progress in course progress
        const lectureIndex = courseProgress.lectureProgress.findIndex((lecture) => lecture.lectureId === lectureId);
        if(lectureIndex !== -1){
            courseProgress.lectureProgress[lectureIndex].viewed = true ; 
        }else{
            courseProgress.lectureProgress.push({
                lectureId , viewed : true
            })
        }

        const lectureProgressLength = courseProgress.lectureProgress.filter((lectureProg) => lectureProg.viewed).length ; 
        const course = await Course.findById(courseId) ; 
        if(lectureProgressLength === course.lectures.length){
            courseProgress.completed = true; 
        }
        await courseProgress.save();
        return res.status(200).json({
            message : "Lecture Progress updated successfully . "
        })
    } catch (error) {
        console.log(error);
        
    }
}


export const markAsCompleted = async(req,res)=>{
    const {courseId } = req.params ; 
    const userId = req.id; 

    let courseProgress = await CourseProgress.findOne({courseId , userId}) ; 

    if(!courseProgress){
        return res.status(404).json({
            message : "Course progress not found"
        })
    }

    courseProgress.lectureProgress.map((lectureProgress)=> lectureProgress.viewed = true) ;
    courseProgress.completed = true ; 
    await courseProgress.save() ; 
    return res.status(200).json({
        message : "Course marked as Completed" 
    })
}
export const markAsInCompleted = async(req,res)=>{
    const {courseId } = req.params ; 
    const userId = req.id; 

    let courseProgress = await CourseProgress.findOne({courseId , userId}) ; 

    if(!courseProgress){
        return res.status(404).json({
            message : "Course progress not found"
        })
    }

    courseProgress.lectureProgress.map((lectureProgress)=> lectureProgress.viewed = false) ;
    courseProgress.completed = true ; 
    await courseProgress.save() ; 
    return res.status(200).json({
        message : "Course marked as Incompleted" 
    })
}
