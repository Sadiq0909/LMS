import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const COURSE_API = "http://localhost:8080/api/v1/course"

export const courseApi = createApi({
    tagTypes : ["Refetch_Creator_Course"] , 
    reducerPath : "courseApi",
    baseQuery:fetchBaseQuery({
        baseUrl : COURSE_API,
        credentials : "include"
    }),
    endpoints :(builder)=>({
        createCourse : builder.mutation({
            query :({courseTitle , category}) =>({
                url : "",
                method : "POST",
                body : {courseTitle , category}
            }),
            invalidatesTags : ["Refetch_Creator_Course"]
        }),
        getCreatorCourse :builder.query({
            query:()=>({
                url : "" ,
                method :"GET"
            }),
            providesTags : ["Refetch_Creator_Course"]
        }),
        editCourse : builder.mutation({
            query :({formData ,courseId})=>({
                url : `/${courseId}`,
                method : "PUT",
                body : formData
            }),
            invalidatesTags : ["Refetch_Creator_Course"]
        }),
        getCourseById : builder.query({
            query : (courseId)=>({
                url : `/${courseId}`,
                method : "GET"
            })
        }),
        createLecture:builder.mutation({
            query :({lectureTitle , courseId})=>({
                url : `/${courseId}/lecture`,
                method : "POST",
                body : {lectureTitle}
            })
        }),
        getCourseLecture: builder.query({
            query: (courseId) => ({
              url: `/${courseId}/lecture`,
              method: "GET",
            })
        }),
        editLecture : builder.mutation({
            query : ({lectureTitle , videoInfo , inPreviewFree,courseId , lectureId})=>({
                url : `/${courseId}/lecture/${lectureId}`,
                method : "POST",
                body : {lectureTitle , videoInfo , inPreviewFree}
            })
        })
    })
})

export const {
    useCreateCourseMutation,
    useGetCreatorCourseQuery,
    useEditCourseMutation,
    useGetCourseByIdQuery,
    useCreateLectureMutation,
    useGetCourseLectureQuery,
    useEditLectureMutation
} = courseApi ; 