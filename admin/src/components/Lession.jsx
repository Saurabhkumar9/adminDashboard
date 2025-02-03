import React, { useState } from "react";
import Dashboard from "./Dashbord";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

function Lession() {
  const [courseId, setCourseId] = useState("");
  const [lessons, setLessons] = useState([]);
  const [courseData, setCourseData] = useState({});

  // Input field change handler
  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };

  // Search function
  const handleSearch = async () => {
    if (!courseId) {
      alert("Please enter a course ID");
      return;
    }

    try {
      const courseResponse = await axios.get(
        `http://localhost:4000/api/admin/course/${courseId}`
      );

      if (courseResponse.data) {
        setCourseData(courseResponse.data);

        const lessonResponse = await axios.get(
          `http://localhost:4000/api/admin/lession/find`
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

  const handleDelete = async (lessionID) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/admin/lession/delete/${lessionID}`
      );
      console.log(res.data);
      // Remove deleted lesson from state
      setLessons(lessons.filter((lesson) => lesson._id !== lessionID));
      alert(res.data.message || "Lesson deleted successfully");
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert(error.response?.data.message || "Failed to delete lesson");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
        {/* Sidebar */}
        <div className="card bg-gray-900 grid h-auto flex-grow p-4 w-[25%]">
          <Dashboard />
        </div>

        {/* Main content */}
        <div className="card bg-gray-900 grid h-auto flex-grow p-4 w-[74%]">
          {/* Search Box */}
          <div className="m-4">
            <span className="m-3">Enter Course Id:</span>
            <input
              className="m-4 bg-black text-white p-5 rounded-sm outline-none h-6"
              placeholder="Course ID"
              type="text"
              value={courseId}
              onChange={handleCourseIdChange}
            />
            <button
              className="bg-red-700 w-20 h-10 rounded-sm"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Course Name Display */}
          <div className="overflow-x-auto rounded-box bg-gray-900">
            <div className="text-center bg-slate-900 p-4 rounded-sm">
              <p className="font-bold text-white text-xl">
                {courseData.courseName || "Course Name"}
              </p>
            </div>

            {/* Lessons Table */}
            <table className="table">
              <thead>
                <tr>
                  <th>Lesson ID</th>
                  <th>Lesson Name</th>
                  <th>Lesson Link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lessons.length > 0 ? (
                  lessons.map((lesson) => (
                    <tr key={lesson._id} className="bg-base-200">
                      <td>{lesson._id}</td>
                      <td>{lesson.lession_title}</td>
                      <td>
                        <a
                          href={lesson.lession_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          {lesson.lession_link}
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
        <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
          <a href="/lessionAdd">
            <IoAdd size={24} />
          </a>
        </button>
      </div>
    </>
  );
}

export default Lession;