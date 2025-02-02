import React from "react";
import Dashboard from "./Dashbord";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";

function Lession() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
        <div className="card bg-gray-900   grid h-auto flex-grow  p-4 w-[25%]">
          <Dashboard />
        </div>

        <div className="card bg-gray-900 grid h-auto flex-grow  p-4 w-[74%]">

        <div className=" ">
            <span className="m-3">Enter Course Id:</span>
            <input className="m-4 bg-white outline-none h-6" placeholder="course id" type="text" /> 
            <button className="bg-red-700 w-20 h-10 rounded-sm " >Search</button>
        </div>

          <div className="overflow-x-auto  rounded-box bg-gray-900">
          <div className="text-center bg-slate-900 p-4 rounded-sm">
            <p className="font-bold text-white text-xl"> Lession </p>
          </div>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>lession Id</th>
                  <th>lession name</th>
                  <th>lession link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>1</th>
                  <td>example@12</td>
                  <td>14/08/2024</td>
                  <td>
                    <RiDeleteBinLine size={20} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

       <div className="flex justify-end pr-20 pt-10 pb-10 w-full">
            <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
              <a href="/lessionAdd"><IoAdd size={24} /></a>
            </button>
          </div>
    </>
  );
}

export default Lession;
