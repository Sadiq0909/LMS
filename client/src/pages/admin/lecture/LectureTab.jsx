import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Progress } from '@/components/ui/progress'
import { toast } from 'sonner'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditLectureMutation, useRemoveLectureMutation } from '@/features/api/courseApi'
import { Loader2 } from 'lucide-react'

const LectureTab = () => {

    const params = useParams()
    const navigate = useNavigate();
    const { courseId, lectureId } = params;

    const [lectureTitle, setLectureTitle] = useState('')
    const [uploadVideoInfo, setUploadVideoInfo] = useState(null)
    const [IsFree, setIsFree] = useState(false)
    const [mediaProgress, setMediaProgress] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [btnDisable, setBtnDisable] = useState(true)

    const [EditLecture, { data, isLoading, error, isSuccess }] = useEditLectureMutation()
    const [removeLecture, { data: removeData, isLoading: removeLoading, isSuccess: removeSuccess }] = useRemoveLectureMutation();


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
            lectureTitle, videoInfo: uploadVideoInfo, courseId, lectureId, inPreviewFree: IsFree
        })
    }

    const removeLectureHandler = async () => {
        await removeLecture({ lectureId })
        navigate(`/admin/course/${courseId}/lecture`)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message || "Lecture Updated Successfully")
        } if (error) {
            toast.error(error.data.message || "Failed to Edit Lecture")
        }
    }, [data, isLoading, error, isSuccess])

    useEffect(() => {
        if (removeSuccess) {
            toast.success(removeData.message || "Lecture Removed Successfully")
        }
    }, [removeSuccess])

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
                <Button disabled = {removeLoading} onClick={removeLectureHandler}>
                    {
                        removeLoading ? (
                            <>
                            <Loader2 className='w-4 h-4 animate-spin'/> Please Wait
                            </>
                        ):(
                            " Remove Lecture"
                        )
                    }
                    </Button>
                    <Button variant="outline" onClick={EditLectureHandler}>
                        {
                            isLoading ? (
                                <>
                                <Loader2 className='w-4 h-4 Please Wait'/> Please Wait
                                </>
                            ):(
                                "Update Lecture"
                            )
                        }
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default LectureTab