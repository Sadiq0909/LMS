import React from 'react'
import { Link } from 'react-router-dom'
import { ChartNoAxesColumn, SquareLibrary } from 'lucide-react'
import { Outlet } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="flex">
      <div className='hidden md:block w-[250px] lg:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 bg-zinc-300 p-5 sticky h-screen top-0'>
        <div className='mt-24 space-y-4'>
          <Link to={"dashboard"} className='flex items-center gap-2'>
            <ChartNoAxesColumn size={30} />
            <h1 className='text-lg font-semibold'>Dashboard</h1>
          </Link>
          <Link to={"course"} className='flex items-center gap-2'>
            <SquareLibrary size={30} />
            <h1 className='text-lg font-semibold'>Courses</h1>
          </Link>
        </div>
        </div>
        <div className='md:px-20 px-10 pt-28 flex-1'>
          <Outlet />
      </div>
    </div>
  )
}

export default Sidebar