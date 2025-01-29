import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'
import { Button } from '@/components/ui/button'

const EditCourse = () => {
  return (
    <div className='flex-1 mt-5'>
        <div className='flex items-center mb-8 justify-between'>
            <h1 className='font-bold text-3xl '>Add Detail information regarding course</h1>
            <Link to={"lecture"}>
                <Button>Go to Lectures Page</Button>
            </Link>
        </div>
        <CourseTab />
    </div>
  )
}

export default EditCourse