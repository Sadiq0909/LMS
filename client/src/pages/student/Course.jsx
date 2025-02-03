import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {

  return (
    <Link to={`course-detail/${course._id}`}>
      <Card className="overflow-hidden rounded-lg dark:bg-zinc-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ">
        <div className='relative '>
          <img src={course.courseThumbnail} alt="" className='w-full object-cover h-36 rounded-t-lg' />
        </div>
        <CardContent className="px-5 py-3 space-y-4">
          <h2 className='hover:underline font-bold text-lg truncate text-zinc-800'>{course.courseTitle}</h2>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 '>
              <Avatar className="h-8 w-8">
                <AvatarImage src={course.creator?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className='font-medium text-sm text-zinc-700'>{course.creator?.name}</h1>
            </div>
            <Badge className="bg-zinc-200 hover:bg-zinc-400 text-zinc-900 px-2 py-1 text-xs rounded-full">
              {course.courseLevel}
            </Badge>
          </div>
          <div className='text-lg font-bold'>
            <span>{`₹ ${course.coursePrice}`}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default Course