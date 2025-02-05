import React from "react";
import Dashboard from "./Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";

function LessonAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Create a FormData object to handle file upload
      const formData = new FormData();
      formData.append("course_id", data.courseId);
      formData.append("lesson_title", data.lessonTitle);  
      formData.append("lesson_description", data.lessonDescription);
      formData.append("lesson_video", data.lesson_video[0]); // Handling file upload

      const response = await axios.post(
        "http://localhost:4000/api/admin/lesson/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      // Check if the request was successful
      if (response.status === 201) {
        console.log("Lesson added successfully:", response.data);
        alert("Lesson added successfully");
      }
    } catch (error) {
      console.error("Error adding lesson:", error);
      alert("Failed to add lesson");
    }

    reset();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
        <div className="card bg-white grid h-auto flex-grow p-4 w-[25%]">
          <Dashboard />
        </div>

        <div className="card bg-white grid h-auto flex-grow p-4 w-[74%]">
          <div className="flex justify-center items-center rounded-box min-h-screen bg-gray-900 ">
            <div className="bg-gray-400 p-6 m-3 items-start rounded-lg shadow-lg w-[70%]">
              <div className="text-center bg-slate-900 p-4 rounded-sm">
                <p className="font-bold text-white text-xl">New Lesson Add</p>
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
                  {...register("courseId", { required: "Enter course ID" })}
                  id="courseId"
                  placeholder="Course ID"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                />
                {errors.courseId && (
                  <p className="text-red-700">{errors.courseId.message}</p>
                )}

                {/* Lesson Description */}
                <label
                  htmlFor="lessonDescription"
                  className="block text-gray-900 font-medium"
                >
                  Lesson Description
                </label>
                <textarea
                  id="lessonDescription"
                  {...register("lessonDescription", {
                    required: "Enter lesson description",
                  })}
                  placeholder="Lesson Description"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                ></textarea>
                {errors.lessonDescription && (
                  <p className="text-red-700">
                    {errors.lessonDescription.message}
                  </p>
                )}

                {/* Lesson Title */}
                <label
                  htmlFor="lessonTitle"
                  className="block text-gray-900 font-medium"
                >
                  Lesson Title
                </label>
                <input
                  type="text"
                  {...register("lessonTitle", { required: "Enter lesson title" })}
                  id="lessonTitle"
                  placeholder="Lesson Title"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                />
                {errors.lessonTitle && (
                  <p className="text-red-700">{errors.lessonTitle.message}</p>
                )}

                {/* Lesson Video */}
                <label
                  htmlFor="lesson_video"
                  className="block text-gray-900 font-medium"
                >
                  Lesson Video
                </label>
                <input
                  type="file"
                  {...register("lesson_video", {
                    required: "Please select a video file",
                  })}
                  id="lesson_video"
                  className="w-full p-2 border rounded mb-3 bg-white text-black"
                />
                {errors.lesson_video && (
                  <p className="text-red-700">{errors.lesson_video.message}</p>
                )}

                {/* Buttons */}
                <div className="flex justify-end mt-4">
                  <a href="/lesson" className="mr-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-gray-500">
                    Close
                  </a>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded"
                  >
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

export default LessonAdd;
