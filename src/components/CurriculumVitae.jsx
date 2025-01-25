import { useState } from "react";
import Controls from "./Controls";
import Personal from "./Personal";
import Education from "./Education";

function CurriculumVitae() {
  const [personal, setPersonal] = useState({});
  const [education, setEducation] = useState([]);

  // TODO:
  // controls - create a custom data object that will generate a pre-filled in cv - does this belong in controls component?
  // controls - lift the selectedEduId state to here and pass it into the controls component as a prop to change it to null later??
  // display - add a display component
  // experience - add experience component
  // css? - dropdowns and svgs
  // css - add general layout and styling

  return (
    <>
      <Controls />

      {/* <Personal personal={personal} setPersonal={setPersonal} /> */}

      <Education education={education} setEducation={setEducation} />

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
