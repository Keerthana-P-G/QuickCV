import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import Education from './Education';
import InternDetails from './InternDetails';
import Project from './Project';
import Skills from './Skills';
import Resume from './Resume';

function ResumeBuilder() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: ''
  });

  const [educationDetails, setEducationDetails] = useState([]);
  const [internshipDetails, setInternshipDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [skillsData, setSkillsData] = useState({ skills: [], interests: [] });

  const savePersonalDetails = (data) => {
    setPersonalDetails(data);
  };

  const addEducationDetail = (detail) => {
    setEducationDetails([...educationDetails, detail]);
  };

  const addInternshipDetail = (detail) => {
    setInternshipDetails([...internshipDetails, detail]);
  };

  const addProjectDetail = (detail) => {
    setProjectDetails([...projectDetails, detail]);
  };

  const handleSkillsSubmit = (data) => {
    setSkillsData(data);
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <PersonalDetailsForm 
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        onSave={savePersonalDetails} 
      />
      <Education onAddEducationDetail={addEducationDetail} />
      <InternDetails onAddInternship={addInternshipDetail} />
      <Project onSubmit={addProjectDetail} />
      <Skills onSubmit={handleSkillsSubmit} />
      <Resume 
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        internshipDetails={internshipDetails}
        projectDetails={projectDetails}
        skillsData={skillsData}  {/* Pass the skills data */}
      />
      {/* You can render other components like ExperienceForm, etc. */}
    </div>
  );
}

export default ResumeBuilder;
