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
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { toast } from "sonner";

const AddCourse = () => {

    const [courseTitle , setCourseTitle] = useState("");
    const [category , setCategory] = useState("") ;

    const [createCourse ,{data , isLoading , error , isSuccess}] = useCreateCourseMutation();

    const navigate = useNavigate();
    // const isLoading = false ; 

    const getSelectedCategory = (value)=>{
        setCategory(value)
    }
    
    const createCourseHandler = async()=>{
        await createCourse({courseTitle , category})
    }

    useEffect(()=>{
        if(isSuccess){
            toast.success(data?.message || "Course created successfully")
            navigate("/admin/course")
        }
    },[isSuccess , error])

    return (
        <div className="flex-1 mx-10">
            <div className="mb-4">
                <h1 className="font-bold text-xl">Let's add course and basic course details for your new Course</h1>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, rerum?</p>
            </div>
            <div className="space-y-4">
                <div>
                    <Label>Title</Label>
                    <Input 
                    type="text"
                    value ={courseTitle}
                    onChange ={(e)=>setCourseTitle(e.target.value)}
                    placeholder="Your course name" />
                </div>
                <div>
                    <Label>Category</Label>
                    <Select onValueChange={getSelectedCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                <SelectItem value="Next JS">Next JS</SelectItem>
                                <SelectItem value="Data Science">Data Science</SelectItem>
                                <SelectItem value="Frontend Development">
                                    Frontend Development
                                </SelectItem>
                                <SelectItem value="Fullstack Development">
                                    Fullstack Development
                                </SelectItem>
                                <SelectItem value="MERN Stack Development">
                                    MERN Stack Development
                                </SelectItem>
                                <SelectItem value="Javascript">Javascript</SelectItem>
                                <SelectItem value="Python">Python</SelectItem>
                                <SelectItem value="Docker">Docker</SelectItem>
                                <SelectItem value="MongoDB">MongoDB</SelectItem>
                                <SelectItem value="HTML">HTML</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-4 mt-5 items-center">
                    <Button variant="outline" onClick={() => navigate("/admin/course")}>Back</Button>
                    <Button disabled = {isLoading} onClick = {createCourseHandler} >
                        {
                            isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</>:"Create"
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default AddCourse; 