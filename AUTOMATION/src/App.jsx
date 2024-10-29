import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from './pages/career'; // Ensure the import path is correct
import Assessment from './pages/Assessment'; // Make sure the path is correct and the spelling is fixed
import CareerMapping from "./Components/CareerMapping";
import InterviewPrepration from "./Components/InterviewPrepration";
import MentalHealth from "./Components/MentalHealth";
import Trends from "./Components/Trends";
import Salary from "./Components/Salary";
import ResignationLetter from "./Components/ResignationLetter";
import CareerPath from "./Components/CareerPath";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/upload" element={<Assessment />} /> {/* This points to your Assessment component */}
        <Route path="/career-mapping" element={<CareerMapping />} />
        <Route path="/interview-prepration" element={<InterviewPrepration />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/career-path" element={<CareerPath />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/resignation-letter" element={<ResignationLetter />} />

        
      </Routes>
    </div>
  );
};

export default App;
