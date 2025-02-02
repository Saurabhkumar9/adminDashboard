import React from "react";
import Dashboard from "./Dashbord";
import OdCourse from "./OdCourse";

function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-full">
        <div className="card   grid h-auto flex-grow  p-4 w-[25%]">
          <Dashboard />
        </div>

        <div className="card   grid h-auto flex-grow  p-4 w-[74%]">
          <OdCourse />
        </div>
      </div>
    </>
  );
}

export default Home;
