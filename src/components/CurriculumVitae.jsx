import { useState } from "react";
import "../styles/curriculumVitae.css";
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
  // css - add general layout and styling
  // css - dropdowns and svgs
  // experience - add experience component

  return (
    <>
      <main>
        <section className="form-controls-container">
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
        </section>

        <Display personal={personal} education={education} />
      </main>
    </>
  );
}

export default CurriculumVitae;
