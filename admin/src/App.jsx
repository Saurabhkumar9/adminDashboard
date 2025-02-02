import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './Context/FormContext';  // Importing the FormProvider
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import CoursesAdd from './components/CoursesAdd';
import Lession from "./components/Lession";
import LessionAdd from './components/LessionAdd';
import Students from './components/Students';
import Feedback from './components/Feedback';


function App() {
  return (
    <>
    <FormProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/courseAdd" element={<CoursesAdd />} />
        <Route path="/lession" element={<Lession />} />
        <Route path="/lessionAdd" element={<LessionAdd />} />
        <Route path="/students" element={<Students />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
     
    </FormProvider>
   
    </>
  );
}

export default App;
