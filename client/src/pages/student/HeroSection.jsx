import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 py-32 px-4 text-center'>
        <div className="max-w-3xl mx-auto">
            <h1 className='text-zinc-900 text-3xl dark:text-zinc-200 sm:text-4xl lg:text-5xl font-extrabold mb-4'>Find the Best Courses for You</h1>
            <p className='text-zinc-700 dark:text-zinc-200 mb-8'>Discover , Learn and Upskill with our wide range of courses</p>
            <form action="" className='flex items-center bg-white  rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
                <Input 
                type = "text"
                className ="flex-grow border-none focus-visible:ring-0 px-6 py-3 font-semibold text-zinc-600 "
                placeholder="Search courses ..."
                />
                <Button className="bg-zinc-600 dark:bg-zinc-400 text-white font-semibold px-6 py-3 rounded-r-full hover:bg-zinc-800 dark:hover:bg-zinc-500">
                    Search
                </Button>
            </form>
            <Button className="bg-white text text-zinc-900 hover:bg-zinc-200 rounded-full">Explore Courses</Button>
        </div>
    </div>
  )
}

export default HeroSection