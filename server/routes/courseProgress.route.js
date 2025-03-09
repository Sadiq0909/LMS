import express from "express"  ; 
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {getCourseProgress, markAsCompleted, markAsInCompleted, updateLectureProgress} from "../controllers/courseProgress.controller.js"

const router = express.Router() ; 

router.route("/:courseId").get(isAuthenticated,getCourseProgress);
router.route("/:courseId/lecture/:lectureId/view").get(isAuthenticated,updateLectureProgress);
router.route("/:courseId/complete").get(isAuthenticated,markAsCompleted);
router.route("/:courseId/incomplete").get(isAuthenticated,markAsInCompleted);
