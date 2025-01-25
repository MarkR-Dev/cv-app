/* 
todo:
  bonus- svg of school?
  bonus- dropdown?
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
    setSelectedId(newId);
    setEducation([...education, newEntry]);
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

  function handleSaveForm(e) {
    e.preventDefault();
    setStatus("display");
    setSelectedId(null);
  }

  function handleRemoveSelected(e) {
    e.preventDefault();
    const filteredArr = education.filter((edu) => {
      return edu.id !== selectedId;
    });
    setStatus("display");
    setSelectedId(null);
    setEducation(filteredArr);
  }

  function EducationEntry({ entry }) {
    return (
      <>
        <li data-id={entry.id}>
          <h3>{entry.eduName}</h3>
          <button type="button" onClick={handleEditEntry}>
            Edit
          </button>
          <button type="button" onClick={handleRemoveEntry}>
            Remove
          </button>
        </li>
      </>
    );
  }

  return (
    <>
      <h2>Education</h2>

      {status === "display" && (
        <section>
          <ul>
            {education.map((edu) => (
              <EducationEntry key={edu.id} entry={edu} />
            ))}
          </ul>
          <button type="button" onClick={handleAddEntry}>
            Add
          </button>
        </section>
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

          <button type="button" onClick={handleSaveForm}>
            Save
          </button>
          <button type="button" onClick={handleRemoveSelected}>
            Remove
          </button>
        </form>
      )}
    </>
  );
}

export default Education;
