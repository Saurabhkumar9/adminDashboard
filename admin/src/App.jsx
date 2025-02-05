import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CoursesAdd from "./components/CoursesAdd";
import Lesson from "./components/Lesson";
import LessonAdd from "./components/LessonAdd";
import Students from "./components/Students";
import Feedback from "./components/Feedback";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/courseAdd" element={<CoursesAdd />} />
        <Route path="/lesson" element={<Lesson/>} />
        <Route path="/lessonAdd" element={<LessonAdd />} />
        <Route path="/students" element={<Students />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
