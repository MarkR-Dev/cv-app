import Personal from "./Personal";
import Education from "./Education";
import { useState } from "react";

function CurriculumVitae() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
  });

  return (
    <>
      {/* <Personal personal={personal} setPersonal={setPersonal} /> */}

      <Education />

      {/* <div>
        <p>{personal.name}</p>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
        <p>{personal.github}</p>
      </div> */}
    </>
  );
}

export default CurriculumVitae;
