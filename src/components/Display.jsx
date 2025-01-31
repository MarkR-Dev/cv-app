import "../styles/display.css";
import githubIcon from "../assets/github.svg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

function Display({ personal, education }) {
  function PersonalDisplay() {
    return (
      <>
        <div className="personal-display-container">
          <h2 className="personal-name">{personal.name}</h2>
          <div className="personal-info">
            <div className="info">
              {personal.email && (
                <img src={emailIcon} alt="Email Icon" className="icon" />
              )}
              <h3>{personal.email}</h3>
            </div>
            <div className="info">
              {personal.phone && (
                <img src={phoneIcon} alt="Phone Icon" className="icon" />
              )}
              <h3>{personal.phone}</h3>
            </div>
            <div className="info">
              {personal.github && (
                <img src={githubIcon} alt="GitHub Logo" className="icon" />
              )}
              <h3>{personal.github}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }

  function EducationDisplay() {
    return (
      <>
        <div>
          {education.length > 0 ? <h2>Education</h2> : null}

          {education.map((edu) => {
            return (
              <div key={edu.id}>
                <div>
                  <h3>
                    {edu.eduStart} {edu.eduStart && edu.eduEnd ? "- " : null}{" "}
                    {edu.eduEnd}
                  </h3>
                  <h3>{edu.eduLocation}</h3>
                </div>

                <div>
                  <h3>{edu.eduName}</h3>
                  <h3>{edu.eduQual}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  return (
    <>
      <section className="display-container">
        <PersonalDisplay />
        <EducationDisplay />
      </section>
    </>
  );
}

export default Display;
