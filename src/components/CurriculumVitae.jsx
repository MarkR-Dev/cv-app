import { useState } from "react";
import Controls from "./Controls";
import Personal from "./Personal";
import Education from "./Education";
import Display from "./Display";

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
  // (might need to put a container around personal and education)
  // css - add general layout and styling
  // css - dropdowns and svgs
  // experience - add experience component

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

      <Display personal={personal} education={education} />
    </>
  );
}

export default CurriculumVitae;
