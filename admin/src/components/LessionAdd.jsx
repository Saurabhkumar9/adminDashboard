import React from "react";
import Dashboard from "./Dashbord";
import {useForm} from "react-hook-form"

function LessionAdd() {

  const {register, handleSubmit, formState:{errors}}=useForm()

  const onSubmit=(data)=>{
    console.log(data)
  }


  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
        <div className="card bg-white   grid h-auto flex-grow  p-4 w-[25%]">
          <Dashboard />
        </div>

        <div className="card bg-white  grid h-auto flex-grow  p-4 w-[74%]">
          <div className="flex justify-center items-center rounded-box min-h-screen bg-gray-900 ">
            <div className="bg-gray-400 p-6 m-3 items-start rounded-lg shadow-lg w-[70%]">
            <div className="text-center bg-slate-900 p-4 rounded-sm">
            <p className="font-bold text-white text-xl"> New Lession Add</p>
          </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Course ID */}
                <label
                  htmlFor="courseId"
                  className="block text-gray-900 font-medium"
                >
                  Course ID
                </label>
                <input
                  type="text"
                  {...register("courseId", {required:"enter courseId"})}
                  id="courseId"
                  placeholder="Course ID"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                />
                {errors.courseId &&<p className="text-red">{errors.courseId.message}</p> }

                {/* Course Name */}
                <label
                  htmlFor="courseName"
                  className="block text-gray-900 font-medium"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  {...register("courseName", {required:"enter course name"})}
                  id="courseName"
                  placeholder="Course Name"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                />
                {errors.courseName &&<p className="text-red">{errors.courseName.message}</p> }
                {/* Lesson Name */}
                <label
                  htmlFor="lessonName"
                  className="block text-gray-900 font-medium"
                >
                  Lesson Name
                </label>
                <input
                  type="text"
                  {...register("lessionName", {required:"enter LessionName"})}
                  id="lessonName"
                  placeholder="Lesson Name"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                />
                {errors.lessionName &&<p className="text-red">{errors.lessionName.message}</p> }

                {/* Lesson Description */}
                <label
                  htmlFor="lessonDescription"
                  className="block text-gray-900 font-medium"
                >
                  Lesson Description
                </label>
                <textarea
                  id="lessonDescription"
                  {...register("lessonDescription", {required:"enter courseName"})}
                  placeholder="Lesson Description"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                ></textarea>
                {errors.lessonDescription &&<p className="text-red">{errors.lessonDescription.message}</p> }

                {/* Lesson Video Upload */}
                <div className="mb-3">
                  <label className="block text-gray-900 font-medium">
                    Upload Lesson Video
                  </label>
                  <input
                    type="file"
                    {...register("lessionVideo", {required:"enter lession Vedio"})}
                    accept="video/*"
                    className="w-full p-2 border rounded bg-white text-black"
                  />
                  {errors.lessionVideo &&<p className="text-red">{errors.lessionVideo.message}</p> }
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-4">
                  <button className="mr-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-gray-500">
                    Close
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessionAdd;
