import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";

function CurriculumVitae() {
  const [personal, setPersonal] = useState({});
  const [education, setEducation] = useState([]);

  return (
    <>
      {/* <Personal personal={personal} setPersonal={setPersonal} /> */}

      <Education education={education} setEducation={setEducation} />

      {education.map((edu, idx) => {
        return (
          <div key={idx}>
            <h3>{edu.name}</h3>
          </div>
        );
      })}
    </>
  );
}

export default CurriculumVitae;
