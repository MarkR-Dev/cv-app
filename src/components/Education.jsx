import { useState } from "react";
import "../styles/education.css";
import schoolIcon from "../assets/school.svg";

function Education({ education, setEducation, eduStatus, setEduStatus }) {
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
    setEduStatus("typing");
    setSelectedId(newId);
    setEducation([...education, newEntry]);
  }

  function handleEditEntry(e) {
    setEduStatus("typing");
    setSelectedId(e.target.closest("[data-id").dataset.id);
  }

  function handleRemoveEntry(e) {
    const entryToRemove = e.target.closest("[data-id").dataset.id;

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
    setEduStatus("display");
    setSelectedId(null);
  }

  function handleCancelForm(e) {
    e.preventDefault();

    let isEmptyEntry = true;

    for (const [key, value] of Object.entries(selectedEdu)) {
      if (key !== "id" && value !== "") {
        isEmptyEntry = false;
        break;
      }
    }

    if (isEmptyEntry) {
      const filteredArr = education.filter((edu) => {
        return edu.id !== selectedId;
      });
      setEducation(filteredArr);
    }

    setEduStatus("display");
    setSelectedId(null);
  }

  function EducationEntry({ entry }) {
    return (
      <>
        <li data-id={entry.id} className="education-form-entry">
          <h3 className="edu-entry-heading">{entry.eduName}</h3>
          <div className="edu-entry-buttons">
            <button
              type="button"
              onClick={handleEditEntry}
              className="edu-entry-edit-btn"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleRemoveEntry}
              className="edu-entry-remove-btn"
            >
              Remove
            </button>
          </div>
        </li>
      </>
    );
  }

  return (
    <>
      <div className="education-form-container">
        <div className="education-form-heading">
          <img src={schoolIcon} alt="School Icon" className="icon" />
          <h2>Education</h2>
        </div>

        {eduStatus === "display" && (
          <div className="education-entry-list">
            <ul className="edu-entries">
              {education.map((edu) => (
                <EducationEntry key={edu.id} entry={edu} />
              ))}
            </ul>
            <button
              type="button"
              onClick={handleAddEntry}
              className="edu-add-btn"
            >
              Add
            </button>
          </div>
        )}

        {eduStatus === "typing" && (
          <form action="#" id="education">
            <div className="education-input">
              <label htmlFor="eduName">School/University Name:</label>
              <input
                id="eduName"
                name="eduName"
                type="text"
                value={selectedEdu.eduName}
                onChange={handleInputChange}
              />
            </div>

            <div className="education-input">
              <label htmlFor="eduQual">Qualification:</label>
              <input
                id="eduQual"
                name="eduQual"
                type="text"
                value={selectedEdu.eduQual}
                onChange={handleInputChange}
              />
            </div>

            <div className="education-input">
              <label htmlFor="eduStart">Start Date:</label>
              <input
                id="eduStart"
                name="eduStart"
                type="text"
                value={selectedEdu.eduStart}
                onChange={handleInputChange}
              />
            </div>

            <div className="education-input">
              <label htmlFor="eduEnd">End Date:</label>
              <input
                id="eduEnd"
                name="eduEnd"
                type="text"
                value={selectedEdu.eduEnd}
                onChange={handleInputChange}
              />
            </div>

            <div className="education-input">
              <label htmlFor="eduLocation">Location:</label>
              <input
                id="eduLocation"
                name="eduLocation"
                type="text"
                value={selectedEdu.eduLocation}
                onChange={handleInputChange}
              />
            </div>

            <div className="edu-form-buttons">
              <button
                type="button"
                onClick={handleSaveForm}
                className="edu-save-button"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelForm}
                className="edu-cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Education;
