import { useState } from "react";
import "../styles/curriculumVitae.css";
import Controls from "./Controls";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
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

  const [experience, setExperience] = useState([]);
  const [expStatus, setExpStatus] = useState("display");

  return (
    <>
      <main>
        <section className="form-controls-container">
          <Controls
            setPersonal={setPersonal}
            setEducation={setEducation}
            setEduStatus={setEduStatus}
            setExperience={setExperience}
            setExpStatus={setExpStatus}
          />

          <Personal personal={personal} setPersonal={setPersonal} />

          <Education
            education={education}
            setEducation={setEducation}
            eduStatus={eduStatus}
            setEduStatus={setEduStatus}
          />

          <Experience
            experience={experience}
            setExperience={setExperience}
            expStatus={expStatus}
            setExpStatus={setExpStatus}
          />
        </section>

        <Display
          personal={personal}
          education={education}
          experience={experience}
        />
      </main>
    </>
  );
}

export default CurriculumVitae;
