import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Progress } from '@/components/ui/progress'
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'
import { useEditLectureMutation } from '@/features/api/courseApi'

const LectureTab = () => {

    const params = useParams()
    const {courseId , lectureId} = params;

    const [lectureTitle, setLectureTitle] = useState('')
    const [uploadVideoInfo, setUploadVideoInfo] = useState(null)
    const [IsFree, setIsFree] = useState(false)
    const [mediaProgress, setMediaProgress] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [btnDisable, setBtnDisable] = useState(true)

    const [EditLecture , {data,isLoading ,error , isSuccess}] = useEditLectureMutation()


    const fileChangeHandler = async (e) => {
        const file = e.target.files[0]
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            setMediaProgress(true);

            try {
                const res = await axios.post('http://localhost:8080/api/v1/media/upload-video', formData, {
                    onUploadProgress: (progressEvent) => {
                        const { loaded, total } = progressEvent;
                        setUploadProgress(Math.round((loaded / total) * 100));
                    }
                });

                if (res.data && res.data.success) {
                    console.log(res);
                    setUploadVideoInfo({
                        videoUrl: res.data.data.secure_url,
                        publicId: res.data.data.public_id
                    });
                    setBtnDisable(false);
                    toast.success('Video Uploaded Successfully');
                }
            } catch (error) {
                console.log("Scam  --->>>  ", error);
                toast.error('Failed to upload video');
            } finally {
                setMediaProgress(false);
            }

        }
    }

    const EditLectureHandler = async () => {
        await EditLecture({
            lectureTitle,videoInfo :uploadVideoInfo , courseId , lectureId , inPreviewFree : IsFree 
        }) 
    }
    useEffect(()=>{
        if(isSuccess){
            toast.success(data.message || "Lecture Updated Successfully")
        }if(error){
            toast.error(error.data.message || "Failed to Edit Lecture") 
        }
    } ,[data , isLoading , error , isSuccess])

    return (
        <Card>
            <CardHeader className="flex justify-between">
                <div>
                    <CardTitle>Edit Lecture</CardTitle>
                    <CardDescription>Make changes and click save when done</CardDescription>
                </div>
            </CardHeader>
            <CardContent >
                <div>
                    <Label>Title</Label>
                    <Input
                        type="text"
                        value={lectureTitle}
                        onChange={(e) => setLectureTitle(e.target.value)}
                        placeholder="Title of Lecture"
                    />
                </div>
                <div className='mt-3'>
                    <Label>Video <span className='text-red-500'>*</span></Label>
                    <Input
                        type="file"
                        accept="video/*"
                        onChange={fileChangeHandler}
                        className="w-fit"
                    />
                </div>
                <div className="flex items-center space-x-3 my-5">
                    <Switch id="free" />
                    <Label htmlFor="free">Is this video Free ?</Label>
                </div>
                {
                    mediaProgress && (
                        <div className='my-4'>
                            <Progress value={uploadProgress} />
                            <p>{uploadProgress}% uploaded</p>
                        </div>
                    )
                }
                <div className='mt-5 flex space-x-2'>
                    <Button>
                        Remove Lecture
                    </Button>
                    <Button variant="outline" onClick={EditLectureHandler}>
                        Update Lecture
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default LectureTab