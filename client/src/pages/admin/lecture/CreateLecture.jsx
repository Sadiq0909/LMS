import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { toast } from "sonner";
const CreateLecture = () => {
    const params = useParams();
    const courseId = params.courseId ; 
    const [lectureTitle , setLectureTitle] = useState("")
    const isLoading = false
    const navigate = useNavigate()

    const createLectureHandler = async()=>{
        
    }

  return (
    <div className="flex-1 mx-10">
            <div className="mb-4">
                <h1 className="font-bold text-xl">Let's add Lectures and basic course details for your new lecture</h1>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rerum?</p>
            </div>
            <div className="space-y-4">
                <div>
                    <Label>Title</Label>
                    <Input 
                    type="text"
                    value ={lectureTitle}
                    onChange = {(e)=>{setLectureTitle(e.target.value)}}
                    placeholder="Your title name" />
                </div>
                <div className="flex gap-4 mt-5 items-center">
                    <Button variant="outline" onClick={() => navigate(`/admin/course/:${courseId}`)}>Back to Course</Button>
                    <Button disabled = {isLoading}  onClick = {createLectureHandler}>
                        {
                            isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</>:"Create Lecture"
                        }
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default CreateLecture