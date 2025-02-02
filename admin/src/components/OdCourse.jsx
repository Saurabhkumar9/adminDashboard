import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

function OdCourse() {
  return (
    <>
      <div className="overflow-x-auto  rounded-box bg-gray-900">
      <div className="text-center bg-slate-900 p-4 rounded-sm">
            <p className="font-bold text-white text-xl">Registred student </p>
          </div>

  <table className="table">


    {/* head */}
    <thead>
      <tr>
        <th>Course Id</th>
        <th>Student Email</th>
        <th>OrderDate</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>example@12</td>
        <td>14/08/2024</td>
        <td>30</td>
        <td>
        <RiDeleteBinLine size={20} />
        </td>
       
      </tr>
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default OdCourse
