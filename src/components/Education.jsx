/* 
todo:
  bonus- svg of school?
  bonus- dropdown?
  disable enter submit form
  refactor: combine all handleXChange functions into one?
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
      name: "",
      qual: "",
      start: "",
      end: "",
      location: "",
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

  function handleQualChange(e) {
    const newArr = education.map((edu) => {
      if (edu.id === selectedId) {
        edu.qual = e.target.value;
      }
      return edu;
    });

    setEducation(newArr);
  }

  function handleStartChange(e) {
    const newArr = education.map((edu) => {
      if (edu.id === selectedId) {
        edu.start = e.target.value;
      }
      return edu;
    });

    setEducation(newArr);
  }

  function handleEndChange(e) {
    const newArr = education.map((edu) => {
      if (edu.id === selectedId) {
        edu.end = e.target.value;
      }
      return edu;
    });

    setEducation(newArr);
  }

  function handleLocationChange(e) {
    const newArr = education.map((edu) => {
      if (edu.id === selectedId) {
        edu.location = e.target.value;
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

          <label htmlFor="edu-qual">
            Qualification:
            <input
              id="edu-qual"
              name="edu-qual"
              type="text"
              value={selectedEdu.qual}
              onChange={handleQualChange}
            />
          </label>

          <label htmlFor="edu-start">
            Start Date:
            <input
              id="edu-start"
              name="edu-start"
              type="text"
              value={selectedEdu.start}
              onChange={handleStartChange}
            />
          </label>

          <label htmlFor="edu-end">
            End Date:
            <input
              id="edu-end"
              name="edu-end"
              type="text"
              value={selectedEdu.end}
              onChange={handleEndChange}
            />
          </label>

          <label htmlFor="edu-location">
            Location:
            <input
              id="edu-location"
              name="edu-location"
              type="text"
              value={selectedEdu.location}
              onChange={handleLocationChange}
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Education;
