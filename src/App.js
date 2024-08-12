

import React,{useState} from 'react';
// import RoleSearch from './components/RoleSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import AuthPage from './components/AuthPage';
import AboutPage from './components/Aboutpage';
import Contact from './components/Contact';
import Exp from './components/Exp';
import PersonalDetailForm from './components/PersonalDetailForm'
import Education from './components/Education'
import Intern from './components/Intern'
import InternDetails from './components/InternDetails';
import InternDetailList from './components/InternDetailList';
import Project from './components/Project';
import ProjectDetailList from './components/ProjectDetailList';
import Skills from './components/Skills'; 
// import Counter from './components/Counter';
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
    // <div>
    //   <Counter/>
    // </div>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      {/* <Route path="/ax" element={<RoleSearch/>}/> */}
        <Route path="/exp" element={<Exp/>} />
        <Route path="/personal-detail-form" element={<PersonalDetailForm/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/intern" element={<Intern/>} />
        <Route
          path="/intern-details"
          element={<InternDetails /*onAddInternDetail={handleAddInternDetail}*/ />}
        />
        {/* <Route
          path="/intern-detail-list"
          element={
            <InternDetailList 
              internDetails={internDetails} 
              onAddAnother={handleAddAnotherIntern}
            />
          }
        /> */}
        <Route
          path="/project"
          element={<Project /*onAddProjectDetail={handleAddProjectDetail} *//>}
        />
        {/* <Route
          path="/project-detail-list"
          element={
            <ProjectDetailList 
              projectDetails={projectDetails} 
              onAddAnother={handleAddAnotherProject}
            />
          }
        /> */}
        <Route path="/skills-and-interests" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default App;


