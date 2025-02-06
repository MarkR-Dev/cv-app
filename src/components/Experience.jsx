import { useState } from "react";
import "../styles/experience.css";
import jobIcon from "../assets/job.svg";

function Experience({ experience, setExperience, expStatus, setExpStatus }) {
  const [selectedId, setSelectedId] = useState(null);

  const selectedExp = experience.find((exp) => exp.id === selectedId);

  function handleAddEntry() {
    const newId = crypto.randomUUID();
    const newEntry = {
      id: newId,
      expCompany: "",
      expPosition: "",
      expStart: "",
      expEnd: "",
      expDesc: "",
    };
    setExpStatus("typing");
    setSelectedId(newId);
    setExperience([...experience, newEntry]);
  }

  function handleEditEntry(e) {
    setExpStatus("typing");
    setSelectedId(e.target.closest("[data-id").dataset.id);
  }

  function handleRemoveEntry(e) {
    const entryToRemove = e.target.closest("[data-id").dataset.id;

    const filteredArr = experience.filter((exp) => {
      return exp.id !== entryToRemove;
    });

    setExperience(filteredArr);
  }

  // Combined controlled input handler
  function handleInputChange(e) {
    const newArr = experience.map((exp) => {
      if (exp.id === selectedId) {
        exp[e.target.id] = e.target.value;
      }
      return exp;
    });

    setExperience(newArr);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    setExpStatus("display");
    setSelectedId(null);
  }

  function handleCancelForm(e) {
    e.preventDefault();

    let isEmptyEntry = true;

    for (const [key, value] of Object.entries(selectedExp)) {
      if (key !== "id" && value !== "") {
        isEmptyEntry = false;
        break;
      }
    }

    if (isEmptyEntry) {
      const filteredArr = experience.filter((exp) => {
        return exp.id !== selectedId;
      });
      setExperience(filteredArr);
    }

    setExpStatus("display");
    setSelectedId(null);
  }

  function ExperienceEntry({ entry }) {
    return (
      <>
        <li data-id={entry.id} className="exp-form-entry">
          <h3 className="exp-entry-heading">{entry.expCompany}</h3>
          <div className="exp-entry-buttons">
            <button
              type="button"
              onClick={handleEditEntry}
              className="exp-entry-edit-btn"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleRemoveEntry}
              className="exp-entry-remove-btn"
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
      <div className="exp-form-container">
        <div className="exp-form-heading">
          <img src={jobIcon} alt="Briefcase Icon" className="icon" />
          <h2>Experience</h2>
        </div>

        {expStatus === "display" && (
          <div className="exp-entry-list">
            <ul className="exp-entries">
              {experience.map((exp) => (
                <ExperienceEntry key={exp.id} entry={exp} />
              ))}
            </ul>
            <button
              type="button"
              onClick={handleAddEntry}
              className="exp-add-btn"
            >
              Add
            </button>
          </div>
        )}

        {expStatus === "typing" && (
          <form action="#" id="experience">
            <div className="exp-input">
              <label htmlFor="expCompany">Company Name:</label>
              <input
                id="expCompany"
                name="expCompany"
                type="text"
                value={selectedExp.expCompany}
                onChange={handleInputChange}
              />
            </div>

            <div className="exp-input">
              <label htmlFor="expPosition">Position:</label>
              <input
                id="expPosition"
                name="expPosition"
                type="text"
                value={selectedExp.expPosition}
                onChange={handleInputChange}
              />
            </div>

            <div className="exp-input">
              <label htmlFor="expStart">Start Date:</label>
              <input
                id="expStart"
                name="expStart"
                type="text"
                value={selectedExp.expStart}
                onChange={handleInputChange}
              />
            </div>

            <div className="exp-input">
              <label htmlFor="expEnd">End Date:</label>
              <input
                id="expEnd"
                name="expEnd"
                type="text"
                value={selectedExp.expEnd}
                onChange={handleInputChange}
              />
            </div>

            <div className="exp-input">
              <label htmlFor="expDesc">Description:</label>
              <input
                id="expDesc"
                name="expDesc"
                type="text"
                value={selectedExp.expDesc}
                onChange={handleInputChange}
              />
            </div>

            <div className="exp-form-buttons">
              <button
                type="button"
                onClick={handleSaveForm}
                className="exp-save-button"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelForm}
                className="exp-cancel-button"
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

export default Experience;
