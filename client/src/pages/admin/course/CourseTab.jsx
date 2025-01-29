import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import RichTextEditor from '@/components/RichTextEditor'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CourseTab = () => {
    const isLoading  = true
    const navigate = useNavigate()
    const [input, setInput] = useState({
        courseTitle: "",
        subTitle: "",
        description: "",
        category: "",
        courseLevel: "",
        coursePrice: "",
        courseThumbnail: ""
    })
    const changeEventHandler = (E) => {
        const { name, value } = E.target;
        setInput({ ...input, [name]: value });
    }
    const isPublished = true;
    return (
        <Card  className="mb-20">
            <CardHeader className="flex flex-row justify-between">
                <div>
                    <CardTitle>Basic Course Information</CardTitle>
                    <CardDescription>Make changes to your courses here. Click save when you're done</CardDescription>
                </div>
                <div className='space-x-3'>
                    <Button variant="outline">
                        {
                            isPublished ? "Unpublish" : "Publish"
                        }
                    </Button>
                    <Button>
                        Remove Course
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='mt-3 space-y-4'>
                    <div>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            placeholder="Enter course title....."
                            name="courseTitle"
                            value={input.courseTitle}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Subtitle</Label>
                        <Input
                            type="text"
                            placeholder="Enter course subtitle....."
                            name="subTitle"
                            value={input.subTitle}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <RichTextEditor input={input} setInput={setInput} />
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <Label>Category</Label>
                            <Select >
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
                        <div>
                            <Label>Course Level</Label>
                            <Select >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Course Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        <SelectItem value="Beginner">Beginner</SelectItem>
                                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                                        <SelectItem value="Advance">
                                        Advance
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Price</Label>
                            <Input 
                            type = "number"
                            name ="coursePrice"
                            value = {input.coursePrice}
                            onChange = {changeEventHandler}
                            placeholder = " ₹499 "
                            className = "w-fit"
                            />
                        </div>
                    </div>
                        <div>
                            <Label>Thumbnail</Label>
                            <Input 
                            type ="file"
                            className = "w-fit"
                            accept = "image/*"
                            />
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Button variant = "outline" onClick ={()=>navigate("/admin/course")}>Cancel</Button>
                            <Button disabled ={isLoading}>
                                {
                                    isLoading?(
                                        <>
                                        <Loader2 className='w-4 h-4 mr-2 animate-spin'/>
                                        Please Wait
                                        </>
                                    ):"Save"
                                }
                            </Button>
                        </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseTab