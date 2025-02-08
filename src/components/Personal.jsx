import "../styles/personal.css";
import personalIcon from "../assets/personal.svg";
import arrowIcon from "../assets/arrow.svg";
import { useState } from "react";

function Personal({ personal, setPersonal }) {
  const [isActive, setIsActive] = useState(false);

  function handleNameChange(e) {
    setPersonal({ ...personal, name: e.target.value });
  }

  function handleEmailChange(e) {
    setPersonal({ ...personal, email: e.target.value });
  }

  function handlePhoneChange(e) {
    setPersonal({ ...personal, phone: e.target.value });
  }

  function handleGithubChange(e) {
    setPersonal({ ...personal, github: e.target.value });
  }

  function handleActiveToggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="#" id="personal">
        <div className="personal-heading" onClick={handleActiveToggle}>
          <img src={personalIcon} alt="Person Icon" className="icon" />
          <h2>Personal</h2>
          <img
            src={arrowIcon}
            alt="Chevron Icon"
            className={"arrow" + (isActive ? " arrow-active" : "")}
          />
        </div>

        <div className={"personal-form-controls" + (isActive ? " active" : "")}>
          <div className="personal-input">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={personal.name}
              onChange={handleNameChange}
            />
          </div>

          <div className="personal-input">
            <label htmlFor="name">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={personal.email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="personal-input">
            <label htmlFor="name">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="phone"
              value={personal.phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="personal-input">
            <label htmlFor="name">Github:</label>
            <input
              id="github"
              name="github"
              type="text"
              value={personal.github}
              onChange={handleGithubChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Personal;
