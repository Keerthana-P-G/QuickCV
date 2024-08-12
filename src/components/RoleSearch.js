import React, { useState } from 'react';
import './RoleSearch.css';

const RoleSearch = () => {
  const resume = [
    {
      role: "Software Developer",
      skills: ["CSS", "HTML", "JavaScript", "React"],
    },
    {
      role: "Data Scientist",
      skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    },
    {
      role: "Project Manager",
      skills: ["Project Planning", "Risk Management", "Agile", "Scrum"],
    },
    {
      role: "Cybersecurity Analyst",
      skills: ["Network Security", "Risk Assessment", "Penetration Testing", "Incident Response"],
    },
    {
      role: "DevOps Engineer",
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS"],
    },
    {
      role: "UI/UX Designer",
      skills: ["Wireframing", "Prototyping", "User Research", "Figma"],
    },

  ];

  const [searchInput, setSearchInput] = useState('');
  const [skills, setSkills] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setSkills([]);
      return;
    }
    const roleData = resume.find((item) =>
      item.role.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (roleData) {
      setSkills(roleData.skills);
    } else {
      setSkills([]);
    }
  };

  return (
    <div className='bkgsk'>
    <div className="role-search-container-ax">
      <h1>Search Role</h1>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Enter role"
        className="search-input-ax"
      />
      {skills.length > 0 && (
        <div className="skills-container-ax">
          <h2>Relevant Skills</h2>
          <ul className="skills-list-ax">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item-ax">{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default RoleSearch;
