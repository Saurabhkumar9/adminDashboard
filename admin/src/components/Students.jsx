import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri'; // Import the delete icon
import Dashboard from './Dashboard';

function Students() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
        <div className="card  grid h-auto flex-grow p-4 w-[25%]">
          <Dashboard />
        </div>

        <div className="card  grid h-auto flex-grow p-4 w-[74%]">
          <div className="overflow-x-auto rounded-box bg-gray-900">
          <div className="text-center bg-slate-900 p-4">
            <p className="font-bold text-white text-xl">Student Registred</p>
          </div>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Student Id </th>
                  <th>Student Name</th>
                  <th>Student Email</th>
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
    </>
  );
}

export default Students;
