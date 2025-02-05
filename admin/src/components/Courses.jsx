import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Dashboard from "./Dashboard";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

function Courses() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    courseName: "",
    authorName: "",
    coursePrice: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/course/find")
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (courseId) => {
    axios
      .delete(`http://localhost:4000/api/admin/course/delete/${courseId}`)
      .then((res) => {
        console.log(res.data);
        setCourse(course.filter((item) => item._id !== courseId));
      })
        

      .catch((error) => {
        console.error("Error deleting course:", error);
      });
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setSelectedCourse(item);
    setUpdatedData({
      courseName: item.courseName,
      authorName: item.authorName,
      coursePrice: item.coursePrice,
    });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/api/admin/course/update/${selectedCourse._id}`, updatedData)
      .then((res) => {
        console.log("Course updated:", res.data);
        setCourse((prevCourses) =>
          prevCourses.map((c) => (c._id === selectedCourse._id ? res.data : c))
        );
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
      <div className="card grid h-auto flex-grow p-4 w-[25%]">
        <Dashboard />
      </div>

      <div className="card grid h-auto flex-grow p-4 w-[74%]">
        <div className="overflow-x-auto rounded-box bg-gray-900">
          <div className="text-center bg-slate-900 p-4">
            <p className="font-bold text-white text-xl">Courses</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left text-gray-300">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-2">Course Id</th>
                  <th className="px-4 py-2">Course Name</th>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : course.length > 0 ? (
                  course.map((item) => (
                    <tr key={item._id} className="bg-base-200 hover:bg-base-300 transition">
                      <td className="px-4 py-2">{item._id || "N/A"}</td>
                      <td className="px-4 py-2">{item.courseName || "N/A"}</td>
                      <td className="px-4 py-2">{item.authorName || "N/A"}</td>
                      <td className="px-4 py-2 flex gap-2">
                        <MdEdit
                          size={20}
                          className="cursor-pointer text-blue-500 hover:text-blue-700"
                          onClick={() => handleEdit(item)}
                        />
                        <RiDeleteBinLine
                          size={20}
                          className="cursor-pointer text-red-500 hover:text-red-700"
                          onClick={() => handleDelete(item._id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-red-500">
                      No Courses Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-20 pt-10 pb-10 w-full">
        <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
          <a href="/courseAdd">
            <IoAdd size={24} />
          </a>
        </button>
      </div>

      {/* Edit Course Form */}
      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Course</h2>
            <label className="block mb-2">Course Name</label>
            <input
              type="text"
              value={updatedData.courseName}
              onChange={(e) => setUpdatedData({ ...updatedData, courseName: e.target.value })}
              className="border p-2 w-full mb-4"
            />

            <label className="block mb-2">Author Name</label>
            <input
              type="text"
              value={updatedData.authorName}
              onChange={(e) => setUpdatedData({ ...updatedData, authorName: e.target.value })}
              className="border p-2 w-full mb-4"
            />

            <label className="block mb-2">Course Price</label>
            <input
              type="text"
              value={updatedData.coursePrice}
              onChange={(e) => setUpdatedData({ ...updatedData, coursePrice: e.target.value })}
              className="border p-2 w-full mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
              <button
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
