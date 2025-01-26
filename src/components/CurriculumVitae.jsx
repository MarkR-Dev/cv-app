import { useState } from "react";
import Controls from "./Controls";
import Personal from "./Personal";
import Education from "./Education";

function CurriculumVitae() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
  });
  const [education, setEducation] = useState([]);
  const [eduStatus, setEduStatus] = useState("display");

  // TODO:
  // display - add a display component
  // experience - add experience component
  // css? - dropdowns and svgs
  // css - add general layout and styling

  return (
    <>
      <Controls
        setPersonal={setPersonal}
        setEducation={setEducation}
        setEduStatus={setEduStatus}
      />

      <Personal personal={personal} setPersonal={setPersonal} />

      <Education
        education={education}
        setEducation={setEducation}
        eduStatus={eduStatus}
        setEduStatus={setEduStatus}
      />

      {education.map((edu, idx) => {
        return (
          <div key={idx}>
            <h3>{edu.eduName}</h3>
            <h3>{edu.eduQual}</h3>
            <h3>{edu.eduStart}</h3>
            <h3>{edu.eduEnd}</h3>
            <h3>{edu.eduLocation}</h3>
          </div>
        );
      })}
    </>
  );
}

export default CurriculumVitae;
