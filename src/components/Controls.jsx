import "../styles/controls.css";

function Controls({
  setPersonal,
  setEducation,
  setEduStatus,
  setExperience,
  setExpStatus,
}) {
  const examplePersonal = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123456",
    github: "test-github",
  };

  const exampleEduOne = {
    id: crypto.randomUUID(),
    eduName: "Example University",
    eduQual: "Example Degree",
    eduStart: "26-01-25",
    eduEnd: "Ongoing",
    eduLocation: "London",
  };
  const exampleEduTwo = {
    id: crypto.randomUUID(),
    eduName: "Example School",
    eduQual: "Example Qualifications",
    eduStart: "26-01-25",
    eduEnd: "Ongoing",
    eduLocation: "London",
  };

  const exampleEducation = [exampleEduOne, exampleEduTwo];

  const exampleExpOne = {
    id: crypto.randomUUID(),
    expCompany: "Example Company 1",
    expPosition: "Example Position 1",
    expStart: "26-01-25",
    expEnd: "Ongoing",
    expDesc: "A description of the job role",
  };

  const exampleExpTwo = {
    id: crypto.randomUUID(),
    expCompany: "Example Company 2",
    expPosition: "Example Position 2",
    expStart: "26-01-25",
    expEnd: "Ongoing",
    expDesc: "A description of the job role",
  };

  const exampleExperience = [exampleExpOne, exampleExpTwo];

  function handleLoadExample() {
    setPersonal(examplePersonal);
    setEducation(exampleEducation);
    setEduStatus("display");
    setExperience(exampleExperience);
    setExpStatus("display");
  }

  function handleClearData() {
    setPersonal({
      name: "",
      email: "",
      phone: "",
      github: "",
    });
    setEducation([]);
    setEduStatus("display");
    setExperience([]);
    setExpStatus("display");
  }

  return (
    <>
      <div className="controls-container">
        <button
          type="button"
          onClick={handleLoadExample}
          className="example-btn"
        >
          Example
        </button>
        <button type="button" onClick={handleClearData} className="clear-btn">
          Clear
        </button>
      </div>
    </>
  );
}

export default Controls;
