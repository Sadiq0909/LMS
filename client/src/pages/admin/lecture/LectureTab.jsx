import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const LectureTab = () => {
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
                        placeholder="Title of Lecture"
                    />
                </div>
                <div className='mt-3'>
                    <Label>Video <span className='text-red-500'>*</span></Label>
                    <Input
                        type="file"
                        accept="video/*"
                        className="w-fit"
                    />
                </div>
                <div className="flex items-center space-x-3 my-5">
                    <Switch id="free" />
                    <Label htmlFor="free">Is this video Free ?</Label>
                </div>
                <div className= 'mt-5 flex space-x-2'>
                    <Button>
                        Remove Lecture
                    </Button>
                    <Button variant = "outline">
                        Update Lecture
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default LectureTab;