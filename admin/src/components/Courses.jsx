import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Dashboard from "./Dashbord";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

function Courses() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/course/find")
      .then((res) => {
        console.log(res.data);
        setCourse(res.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
      {/* Sidebar */}
      <div className="card grid h-auto flex-grow p-4 w-[25%]">
        <Dashboard />
      </div>

      {/* Courses Table */}
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
                        />
                        <RiDeleteBinLine
                          size={20}
                          className="cursor-pointer text-red-500 hover:text-red-700"
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

      {/* Add Course Button */}
      <div className="flex justify-end pr-20 pt-10 pb-10 w-full">
        <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
          <a href="/courseAdd">
            <IoAdd size={24} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Courses;
