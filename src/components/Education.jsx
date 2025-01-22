/* 
todo:
  bonus- svg of school?
  bonus- dropdown?
  disable enter submit form
*/
import { useState } from "react";

function Education({ education, setEducation }) {
  const [status, setStatus] = useState("display");
  const [selectedId, setSelectedId] = useState(null);

  const selectedEdu = education.find((edu) => edu.id === selectedId);

  function handleAddEntry() {
    const newId = crypto.randomUUID();
    const newEntry = {
      name: "",
      id: newId,
    };
    setStatus("typing");
    setEducation([...education, newEntry]);
    setSelectedId(newId);
  }

  function handleEditEntry(e) {
    setStatus("typing");
    setSelectedId(e.target.parentNode.dataset.id);
  }

  function handleRemoveEntry(e) {
    const entryToRemove = e.target.parentNode.dataset.id;

    const filteredArr = education.filter((edu) => {
      return edu.id !== entryToRemove;
    });

    setEducation(filteredArr);
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

  //remove later
  function toggle() {
    if (status === "typing") {
      setStatus("display");
    } else if (status === "display") {
      setStatus("typing");
    }
  }

  return (
    <>
      {/*remove later */}
      <button onClick={toggle}>toggle</button>
      <h2>Education</h2>

      {status === "display" && (
        <div>
          {education.map((edu) => {
            return (
              //is there another way to target the specific item to edit?
              <div key={edu.id} data-id={edu.id}>
                <h3>{edu.name}</h3>
                <button onClick={handleEditEntry}>Edit</button>
                <button onClick={handleRemoveEntry}>Remove</button>
              </div>
            );
          })}
          <button onClick={handleAddEntry}>Add</button>
        </div>
      )}

      {status === "typing" && (
        <form action="#" id="education">
          <label htmlFor="edu-name">
            School/University Name:
            <input
              id="edu-name"
              name="edu-name"
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
