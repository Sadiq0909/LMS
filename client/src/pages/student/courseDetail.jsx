import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BadgeInfo, Lock, PlayCircle } from 'lucide-react'
import React from 'react'

const CourseDetail = () => {

    const purchasedCourse = true ; 


  return (
    <div  className='mt-20 space-y-4'>
        <div className='bg-gradient-to-r from-zinc-900 to-zinc-600 text-neutral-200'>
            <div className='max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2'>
                <h1 className='font-bold text-2xl md:text-3xl '>Course Title</h1>
                <p className='text-base md:text-lg'>Course Subtitle</p>
                <p>created by {" "} <span className='text-neutral-400 italic underline'>Patel Mernstack</span></p>
                <div className='flex items-center gap-2 text-sm text-neutral-300'>
                    <BadgeInfo size={16} />
                    <p>Last updated - 12/12/2012</p>
                </div>
                <p className='text-neutral-300 text-sm'>Students Enrolled  : 10 </p>
            </div>
        </div>
        <div className='max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10'>
            <div className='w-full lg:w-1/2 space-y-5'>
                <h1 className='font-bold text-xl md:text-2xl'>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate expedita odit deserunt quisquam officia quasi culpa quis necessitatibus cum molestias doloribus quam porro quod, a nobis unde corporis quidem. Magnam error veritatis molestias, cum quos dolorum quibusdam, laboriosam fugiat delectus, obcaecati deserunt adipisci exercitationem. Corporis animi aut ipsa quidem nihil.</p>
                <Card>
                    <CardHeader>
                        <CardTitle> Course Content</CardTitle>
                        <CardDescription>4 lectures</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-3'>
                        {
                            [1,2,3,4].map((_ , index) =>(
                                <div key={index} className='flex items-center gap-3 text-sm'>
                                    <span>
                                        {
                                            true ? (<PlayCircle size={14} />) : <Lock size={14} />
                                        }
                                    </span>
                                    <p>Lecture Title</p>
                                </div>
                            ))
                        }
                    </CardContent>
                </Card>
            </div>
            <div className='w-full lg:w-1/3'>
                    <Card>
                        <CardContent className='p-4 flex-col'>
                            <div  className='w-full  aspect-video mb-4'>
                                    Video Aayega
                            </div>
                            <h1>Lecture Title</h1>
                            <Separator className="my-2" />
                            <h1 className='text-lg md:text-xl font-semibold'>Course Price</h1>
                        </CardContent>
                        <CardFooter className ="flex justify-center p-4">
                            {
                                purchasedCourse ? (
                                    <Button className ="w-full">Continue Learning</Button>
                                ) : (
                                    <Button className ="w-full">Purchase Course</Button>
                                )
                            }
                        </CardFooter>
                    </Card>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail