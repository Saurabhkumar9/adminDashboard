import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoLibrary } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { MdSell, MdFeedback } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
// import CoursesAdd from "./CoursesAdd";

function Dashboard() {
  return (
    
    <>
    <div>
    <ul className="menu bg-gray-900 text-white min-h-full rounded-box w-80 p-4">
          {/* Sidebar content here */}
          <li className="text-lg font-bold text-center mb-4">
          <a href="/" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <AiFillDashboard size={20} />
              <span>Dashboard</span>
            </a></li>
          <li>
          </li>
          <li>
            <a href="/course" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <IoLibrary size={20} />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="/lesson" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
            <IoBookSharp size={20} />
              <span>Lession</span>
            </a>
          </li>
          <li>
            <a href="/students" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <PiStudentFill size={20} />
              <span>Students</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <MdSell size={20} />
              <span>Sales Report</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <RiSecurePaymentFill size={20} />
              <span>Payments Status</span>
            </a>
          </li>
          <li>
            <a href="/feedback" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <MdFeedback size={20} />
              <span>Feedback</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700">
              <TbLockPassword size={20} />
              <span>Change Password</span>
            </a>
          </li>
          <li className="mt-4">
            <a className="flex items-center gap-3 p-2 rounded-md bg-red-600 hover:bg-red-700">
              <IoLogOut size={20} />
              <span>Logout</span>
            </a>
          </li>
        </ul>
    </div>
    

    {/* <CoursesAdd/> */}
    </>
  );
}

export default Dashboard;
