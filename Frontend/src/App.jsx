import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./Component/Signup";
function App() {
  return (
    <>
    <div>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/course" element={<Courses/>} />
     <Route path="/signup" element={<Signup />} />
     </Routes>
    </div>
    </>
  );
}

export default App;
