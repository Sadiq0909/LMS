import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { CheckCircle2, CirclePlay } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useGetCourseProgressQuery } from '@/features/api/courseProgressApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const CourseProgress = () => {

  const [currentLecture, setCurrentLecture] = useState(null);

  const params = useParams();
  const { courseId , lectureId } = params;

  const { data, isLoading, isError, refetch } = useGetCourseProgressQuery(courseId);
  if (isLoading) return <h1>Loading ..... </h1>
  if (isError) return <h1>Failed to load Course Details</h1>

  console.log(data);

  const { courseDetails, progress, completed: isCompleted } = data.data;
  const { courseTitle } = courseDetails;

  const initialLecture = currentLecture || courseDetails?.lectures[0];
  const isLectureCompleted = (lectureId) =>{
    return progress.some((prog)=>prog.lectureId === lectureId && prog.viewed )
  }

  // Handler to select the lecture to watch
  const handleSelectLecture = (lecture)=>{
    setCurrentLecture(lecture)
  }


  return (
    <div className='max-w-7xl mx-auto p-4 mt-20'>
      {/* display course name */}
      <div className='flex justify-between p-4'>
        <h1 className='text-2xl font-bold'>{courseTitle}</h1>
        <Button>Completed</Button>
      </div>
      <div className='flex flex-col md:flex-row gap-6'>
        {/* video seection */}
        <div className='flex-1 md:w-3/5 rounded-lg  shadow-lg p-4'>
          <div>
            <video 
            src={currentLecture?.videoUrl || initialLecture.videoUrl} 
            controls={true} 
            className='w-full h-auto md:rounded-lg'
            />
          </div>
          {/* Display lecture title */}
          <div className="mt-5">
            <h3 className="font-bold text-lg">
              {`Lecture ${courseDetails.lectures.findIndex(
                (lec) =>
                  lec._id === (currentLecture?._id || initialLecture._id)
              ) + 1
                } : ${currentLecture?.lectureTitle || initialLecture.lectureTitle
                }`}
            </h3>
          </div>

        </div>
        {/* Lecture Sidebar */}
        <div className='flex flex-col w-full md:w-2/5 border-t md:border-t-0 md:border-l border-gray-300 md:pl-4 pt-4 md:pt-0'>
          <h2 className='font-semibold text-xl mb-4'> Course Lectures</h2>
          <div className='flex-1 overflow-y-auto'>
            {
              courseDetails.lectures.map((lecture, idx) => (
                <Card 
                key={idx} 
                className={`mb-3 hover:cursor-pointer dark:bg-neutral-300 transition transform ${lecture._id=== currentLecture._id ?'bg-neutral-200' : 'dark:bg-neutral-800'}`} 
                onClick = {()=>handleSelectLecture(lecture) }>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className='flex items-center'>
                      {
                        isLectureCompleted(lecture._id) ? (<CheckCircle2 size={24} className='text-green-500 mr-2 ' />) : (<CirclePlay size={24} className='mr-2 ' />)
                      }
                      <div>
                        <CardTitle className="text-lg font-medium">{lecture.lectureTitle}</CardTitle>
                      </div>
                    </div>
                    {
                      isLectureCompleted(lecture._id) &&(
                        <Badge variant={'outline'} className='bg-green-200 text-green-600'> Completed</Badge>
                      )
                    }
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseProgress