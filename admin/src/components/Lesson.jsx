import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";

function Lesson() {
  const [courseId, setCourseId] = useState("");
  const [lessons, setLessons] = useState([]);
  const [courseData, setCourseData] = useState({});

  // Input field change handler
  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };

  // Search function
  const token = localStorage.getItem("token");
  const handleSearch = async () => {
    if (!courseId) {
      toast.error("Please enter a course ID");
      return;
    }

    try {
      const courseResponse = await axios.get(
        `http://localhost:4000/api/admin/course/search/${courseId}`,
        {
          headers: {
           "Authorization": `Bearer ${token}`,
          },
        }
      );

      if (courseResponse.data) {
        setCourseData(courseResponse.data);

        const lessonResponse = await axios.get(
          `http://localhost:4000/api/admin/lesson/find`,
          {
            headers: {
             "Authorization": `Bearer ${token}`,
            },
          }
        );

        console.log(lessonResponse.data);
        // Filter lessons based on courseId
        const filteredLessons = lessonResponse.data.filter(
          (lesson) => lesson.course_id === courseId
        );

        if (filteredLessons.length > 0) {
          setLessons(filteredLessons);
        } else {
          alert("No lessons found for this course");
          setLessons([]);
        }
      } else {
        alert("Course not found");
        setLessons([]);
      }
    } catch (error) {
      console.error("Error fetching course or lessons:", error);
      alert("Failed to fetch course or lessons.");
    }
  };

  const handleDelete = async (lessonID) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/admin/lesson/delete/${lessonID}`,
        {
          headers: {
           "Authorization": `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      // Remove deleted lesson from state
      setLessons(lessons.filter((lesson) => lesson._id !== lessonID));
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error deleting lesson:", error);
      toast.error(error.response?.data.message || "Failed to delete lesson");
    }
  };

  return (
    <>
      <div className="flex flex-col bg-slate-300 sm:flex-row sm:flex-wrap w-full">
        {/* Sidebar */}
        <div className="card  grid h-auto flex-grow p-4 w-[25%]">
          <Dashboard />
        </div>

        {/* Main content */}
        <div className="card  grid h-auto flex-grow p-4 w-[70%]">
          {/* Course Name Display */}
          <div className="overflow-x-auto rounded-box bg-gray-900">
            <div className="m-4 bg-gray-900 rounded-box ">
              <span className="m-3">Enter Course Id:</span>
              <input
                className="m-4 bg-black text-white p-5 rounded-sm outline-none h-6"
                placeholder="Course ID"
                type="text"
                value={courseId}
                onChange={handleCourseIdChange}
              />
              <button
                className="bg-blue-600 hover:bg-red-700  w-20 h-10 rounded-sm"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="text-center bg-slate-900 p-4 rounded-sm">
              <p className="font-bold text-white text-xl">
                {courseData.courseName || "Course Name"}
              </p>
            </div>

            {/* Lessons Table */}
            <table className="table">
              <thead>
                <tr className="bg-slate-400 m-2 p-2">
                  <th className="text-black text-xl">Lesson ID</th>
                  <th className="text-black text-xl">Lesson Name</th>
                  <th className="text-black text-xl">Lesson video</th>
                  <th className="text-black text-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {lessons.length > 0 ? (
                  lessons.map((lesson) => (
                    <tr key={lesson._id} className="bg-base-200">
                      <td className="text-white text-xl">{lesson._id}</td>
                      <td className="text-white text-xl">
                        {lesson.lesson_title}
                      </td>
                      <td>
                        <a
                          href={lesson.lesson_video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          {lesson.lesson_video}
                        </a>
                      </td>
                      <td>
                        <RiDeleteBinLine
                          size={20}
                          className="text-red-500 cursor-pointer"
                          onClick={() => handleDelete(lesson._id)} // Delete action
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-white">
                      No lessons found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Lesson Button */}
      <div className="flex justify-end pr-20 pt-10 pb-10 w-full">
        <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
          <a href="/lessonAdd">
            <IoAdd size={50} />
          </a>
        </button>
      </div>
    </>
  );
}

export default Lesson;
