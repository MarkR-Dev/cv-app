/* 
todo:
  bonus- svg of school?
  bonus- dropdown?
*/
import { useState } from "react";

function Education({ education, setEducation }) {
  const [status, setStatus] = useState("display");
  const [selectedId, setSelectedId] = useState(null);

  const selectedEdu = education[selectedId];

  // will have to alter id when removing?
  function handleAddEntry() {
    const newId = education.length;
    const newEntry = {
      name: "",
      id: newId,
    };
    setStatus("typing");
    setEducation([...education, newEntry]);
    setSelectedId(newId);
  }

  function handleNameChange(e) {
    const newArr = education.map((edu) => {
      if (edu.id === selectedId) {
        edu.name = e.target.value;
      }
      return edu;
    });
    setEducation(newArr);
  }

  return (
    <>
      <h2>Education</h2>

      {status === "display" && (
        <div>
          {education.map((edu) => {
            return (
              //use idx?
              <div key={edu.name}>
                <h3>{edu.name}</h3>
                <button>Edit</button>
                <button>Remove</button>
              </div>
            );
          })}
          <button onClick={handleAddEntry}>Add</button>
        </div>
      )}

      {status === "typing" && (
        <form action="#" id="education">
          <label htmlFor="school-name">
            School/University Name:
            <input
              id="school-name"
              name="school-name"
              type="text"
              value={selectedEdu.name}
              onChange={handleNameChange}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Education;
