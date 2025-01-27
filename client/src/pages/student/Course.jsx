import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage,AvatarFallback } from '@/components/ui/avatar'

const Course = () => {

  return (
    <Card className="overflow-hidden rounded-lg dark:bg-zinc-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ">
      <div className='relative '>
        <img src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75" alt="" className='w-full object-cover h-36 rounded-t-lg' />
      </div>
      <CardContent className ="px-5 py-3 space-y-4">
        <h2 className='hover:underline font-bold text-lg truncate text-zinc-800'>Nextjs Complete Course in Hindi 2025</h2>
        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3 '>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className='font-medium text-sm text-zinc-700'>Patel MernStack</h1>
        </div>
        <Badge className="bg-zinc-200 hover:bg-zinc-400 text-zinc-900 px-2 py-1 text-xs rounded-full">
          Advance
        </Badge>
        </div>
        <div className='text-lg font-bold'>
          <span>₹499</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Course