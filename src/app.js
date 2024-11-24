import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LecturerForm from "./lectureform";
import StudentForm from "./student_form";

const App = () => (
  <Router>
    <nav>
      <Link to="/lecturers">Register Lecturer</Link>
      <Link to="/students">Register Student</Link>
    </nav>
    <Routes>
      <Route path="/lecturers" element={<LecturerForm />} />
      <Route path="/students" element={<StudentForm />} />
    </Routes>
  </Router>
);

export default App;
