import React from "react";
import Dashboard from "./Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function CoursesAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("courseName", data.courseName);
      formData.append("authorName", data.authorName);
      formData.append("coursePrice", data.coursePrice);
      formData.append("courseDescription", data.courseDescription);
      formData.append("image", data.image[0]);

      console.log(formData);

      const response = await axios.post(
        "http://localhost:4000/api/admin/course/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message);
      reset();
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error(error.response.data.message);
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              enctype="multipart/form-data"
            >
              {/* Course Name Input */}
              <label className="block text-gray-900 font-medium">
                Course Name
              </label>
              <input
                type="text"
                {...register("courseName", {
                  required: "Course Name is required",
                })}
                className="w-full p-2 border rounded mb-3"
              />
              {errors.courseName && (
                <p className="text-red-800">{errors.courseName.message}</p>
              )}

              {/* Author Name Input */}
              <label className="block text-gray-900 font-medium">
                Author Name
              </label>
              <input
                type="text"
                {...register("authorName", {
                  required: "Author Name is required",
                })}
                className="w-full text-white p-2 border rounded mb-3"
              />
              {errors.authorName && (
                <p className="text-red-800">{errors.authorName.message}</p>
              )}

              {/* Course Price Input */}
              <label className="block text-gray-900 font-medium">
                Course Price
              </label>
              <input
                type="text"
                {...register("coursePrice", {
                  required: "Course Price is required",
                })}
                className="w-full text-white p-2 border rounded mb-3"
              />
              {errors.coursePrice && (
                <p className="text-red-800">{errors.coursePrice.message}</p>
              )}

              {/* Course Description Input */}
              <label className="block text-gray-900 font-medium">
                Course Description
              </label>
              <textarea
                {...register("courseDescription", {
                  required: "Course Description is required",
                })}
                className="w-full text-white p-2 border rounded mb-3"
              ></textarea>
              {errors.courseDescription && (
                <p className="text-red-800">
                  {errors.courseDescription.message}
                </p>
              )}

              <label className="block text-gray-900 font-medium">
                Upload image
              </label>
              <input
                type="file"
                {...register("image", { required: "image is required" })}
                className="w-full p-2 text-white border rounded mb-3"
              />
              {errors.image && (
                <p className="text-red-800">{errors.image.message}</p>
              )}

              {/* Course Description Input */}

              {/* Buttons */}
              <div className="flex justify-end mt-4">
                <a href="/course"
                  type="button"
                  className="mr-2 px-4 py-2 bg-red-700 text-white rounded"
                >
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
  );
}

export default CoursesAdd;
