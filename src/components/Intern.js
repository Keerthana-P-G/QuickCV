import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Interns.css'; 


const Intern = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="intern-container">
      <div className="content-box">
        <div>
          <div className="question">
            <h1>HAVE YOU ATTENDED ANY INTERNSHIPS ?</h1>
          </div>
          <br></br><br></br>
          <div className="button-group">
            <button
              className="button yes-button"
              onClick={() => setSelectedOption('yes')}
            >
              YES
            </button>
            <button
              className="button no-button"
              onClick={() => setSelectedOption('no')}
            >
              NO
            </button>
          </div>
        </div>
        {selectedOption && (
          <div>
            <Link to={selectedOption === 'yes' ? "/intern-details" : "/project"}>
              <button className="next-button-intern">NEXT</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intern;
 