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
  // display - add a display component
  // tidy up components into useful html containers ready for styling and layout
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

      <Display personal={personal} education={education} />
    </>
  );
}

export default CurriculumVitae;
