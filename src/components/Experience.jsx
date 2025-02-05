import { useState } from "react";
import "../styles/experience.css";
import jobIcon from "../assets/job.svg";

function Experience({ experience, setExperience, expStatus, setExpStatus }) {
  function ExperienceEntry({ entry }) {
    return (
      <>
        <li data-id={entry.id} className="exp-form-entry">
          <h3 className="exp-entry-heading">{entry.expCompany}</h3>
          <div className="exp-entry-buttons">
            <button
              type="button"
              //   onClick={handleEditEntry}
              className="exp-entry-edit-btn"
            >
              Edit
            </button>
            <button
              type="button"
              //   onClick={handleRemoveEntry}
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
              //   onClick={handleAddEntry}
              className="exp-add-btn"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Experience;
