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
    </>
  );
}

export default CurriculumVitae;
