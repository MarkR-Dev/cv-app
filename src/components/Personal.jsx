/* 
todo:
  bonus- svg of person?
  bonus- dropdown?
*/

import "../styles/personal.css";
import personalIcon from "../assets/personal.svg";

function Personal({ personal, setPersonal }) {
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

  return (
    <>
      <form action="#" id="personal">
        <div className="personal-heading">
          <img src={personalIcon} alt="Person Icon" className="icon" />
          <h2>Personal Details</h2>
        </div>

        <div className="personal-form-controls">
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
