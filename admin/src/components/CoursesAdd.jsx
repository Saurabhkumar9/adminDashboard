import React from "react";
import Dashboard from "./Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";

function CoursesAdd() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const courseData = {
        courseName: data.courseName,
        authorName: data.authorName,
        coursePrice: data.coursePrice,
        courseDescription: data.courseDescription,
      };

      // API call to the backend
      const response = await axios.post("http://localhost:4000/api/admin/course/add", courseData);
      alert(response.data.message);  // Show success message
      reset();  // Reset form fields after submission
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="w-[25%]">
        <Dashboard />
      </div>
      <div className="w-[70%]">
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
          <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-[70%]">
            <div className="text-center bg-slate-900 p-4 rounded-sm">
              <p className="font-bold text-white text-xl">Add Course</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Course Name Input */}
              <label className="block text-gray-900 font-medium">Course Name</label>
              <input
                type="text"
                {...register("courseName", { required: "Course Name is required" })}
                className="w-full p-2 border rounded mb-3"
              />
              {errors.courseName && <p className="text-red-800">{errors.courseName.message}</p>}

              {/* Author Name Input */}
              <label className="block text-gray-900 font-medium">Author Name</label>
              <input
                type="text"
                {...register("authorName", { required: "Author Name is required" })}
                className="w-full p-2 border rounded mb-3"
              />
              {errors.authorName && <p className="text-red-800">{errors.authorName.message}</p>}

              {/* Course Price Input */}
              <label className="block text-gray-900 font-medium">Course Price</label>
              <input
                type="text"
                {...register("coursePrice", { required: "Course Price is required" })}
                className="w-full p-2 border rounded mb-3"
              />
              {errors.coursePrice && <p className="text-red-800">{errors.coursePrice.message}</p>}

              {/* Course Description Input */}
              <label className="block text-gray-900 font-medium">Course Description</label>
              <textarea
                {...register("courseDescription", { required: "Course Description is required" })}
                className="w-full p-2 border rounded mb-3"
              ></textarea>
              {errors.courseDescription && <p className="text-red-800">{errors.courseDescription.message}</p>}

              {/* Buttons */}
              <div className="flex justify-end mt-4">
                <button type="button" className="mr-2 px-4 py-2 bg-red-700 text-white rounded">
                  Close
                </button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesAdd;
