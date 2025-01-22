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
      id: newId,
      eduName: "",
      eduQual: "",
      eduStart: "",
      eduEnd: "",
      eduLocation: "",
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

  // Combined controlled input handler
  function handleInputChange(e) {
    const newArr = education.map((edu) => {
      if (edu.id === selectedId) {
        edu[e.target.id] = e.target.value;
      }
      return edu;
    });

    setEducation(newArr);
  }

  //remove later - check that removing all items resets the selectedID via setSelectedId
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
                <h3>{edu.eduName}</h3>
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
          <label htmlFor="eduName">
            School/University Name:
            <input
              id="eduName"
              name="eduName"
              type="text"
              value={selectedEdu.eduName}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="eduQual">
            Qualification:
            <input
              id="eduQual"
              name="eduQual"
              type="text"
              value={selectedEdu.eduQual}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="eduStart">
            Start Date:
            <input
              id="eduStart"
              name="eduStart"
              type="text"
              value={selectedEdu.eduStart}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="eduEnd">
            End Date:
            <input
              id="eduEnd"
              name="eduEnd"
              type="text"
              value={selectedEdu.eduEnd}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="eduLocation">
            Location:
            <input
              id="eduLocation"
              name="eduLocation"
              type="text"
              value={selectedEdu.eduLocation}
              onChange={handleInputChange}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Education;
