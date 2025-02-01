import React from 'react'
import { Edit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Lecture = ({ lecture, index, courseId }) => {
  const navigate = useNavigate()
  const goToUpdateLecture = () => {
    navigate(`${lecture._id}`)
  }
  return (
    <div className='flex items-center justify-between bg-zinc-200 dark:bg-zinc-900 px-4 py-2 rounded-md my-2'>
      <h1 className='font-bold text-zinc-900 dark:text-zinc-200'>Lecture - {index + 1} : {lecture.lectureTitle}</h1>
      <Edit
        className='cursor-pointer text-zinc-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-pink-400'
        onClick={goToUpdateLecture}
      />
    </div>
  )
}

export default Lecture