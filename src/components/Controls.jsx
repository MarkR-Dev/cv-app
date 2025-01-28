function Controls({ setPersonal, setEducation, setEduStatus }) {
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
    eduLocation: "Space",
  };
  const exampleEduTwo = {
    id: crypto.randomUUID(),
    eduName: "Example School",
    eduQual: "Example Qualifications",
    eduStart: "26-01-25",
    eduEnd: "Ongoing",
    eduLocation: "Space",
  };

  const exampleEducation = [exampleEduOne, exampleEduTwo];

  function handleLoadExample() {
    setPersonal(examplePersonal);
    setEducation(exampleEducation);
    setEduStatus("display");
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
  }

  return (
    <>
      <div>
        <button type="button" onClick={handleLoadExample}>
          Example
        </button>
        <button type="button" onClick={handleClearData}>
          Clear
        </button>
      </div>
    </>
  );
}

export default Controls;
