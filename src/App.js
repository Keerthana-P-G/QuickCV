import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intern from './components/Intern';
import InternDetails from './components/InternDetails';
import InternDetailList from './components/InternDetailList';
import Project from './components/Project';
import ProjectDetailList from './components/ProjectDetailList';
import Skills from './components/Skills';   

const App = () => {
  const [internDetails, setInternDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);

  const handleAddInternDetail = (detail) => {
    setInternDetails([...internDetails, detail]);
  };

  const handleAddProjectDetail = (detail) => {
    setProjectDetails([...projectDetails, detail]);
  };

  const handleAddAnotherIntern = () => {
    // No action needed for this example; navigation is handled by the Link component in InternDetailList
  };

  const handleAddAnotherProject = () => {
    // No action needed for this example; navigation is handled by the Link component in ProjectDetailList
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intern />} />
        <Route
          path="/intern-details"
          element={<InternDetails onAddInternDetail={handleAddInternDetail} />}
        />
        <Route
          path="/intern-detail-list"
          element={
            <InternDetailList 
              internDetails={internDetails} 
              onAddAnother={handleAddAnotherIntern}
            />
          }
        />
        <Route
          path="/project"
          element={<Project onAddProjectDetail={handleAddProjectDetail} />}
        />
        <Route
          path="/project-detail-list"
          element={
            <ProjectDetailList 
              projectDetails={projectDetails} 
              onAddAnother={handleAddAnotherProject}
            />
          }
        />
        <Route path="/skills-and-interests" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default App;
