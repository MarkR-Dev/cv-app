import "../styles/display.css";
import githubIcon from "../assets/github.svg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

function Display({ personal, education, experience }) {
  function PersonalDisplay() {
    return (
      <>
        <div className="personal-display-container">
          <h2 className="personal-name">{personal.name}</h2>
          <div className="personal-info">
            {personal.email && (
              <div className="info">
                <img src={emailIcon} alt="Email Icon" className="icon" />
                <h3>{personal.email}</h3>
              </div>
            )}
            {personal.phone && (
              <div className="info">
                <img src={phoneIcon} alt="Phone Icon" className="icon" />
                <h3>{personal.phone}</h3>
              </div>
            )}
            {personal.github && (
              <div className="info">
                <img src={githubIcon} alt="Github Logo" className="icon" />
                <h3>{personal.github}</h3>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  function EducationDisplay() {
    return (
      <>
        <div className="education-display-container">
          {education.length > 0 ? (
            <h2 className="education-display-heading">Education</h2>
          ) : null}

          {education.map((edu) => {
            return (
              <div key={edu.id} className="education-entry">
                <div className="left-info">
                  <h3 className="entry-date">
                    {edu.eduStart} {edu.eduStart && edu.eduEnd ? "- " : null}{" "}
                    {edu.eduEnd}
                  </h3>
                  <h3 className="entry-location">{edu.eduLocation}</h3>
                </div>

                <div className="right-info">
                  <h3 className="entry-name">{edu.eduName}</h3>
                  <h3 className="entry-qual">{edu.eduQual}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function ExperienceDisplay() {
    return (
      <>
        <div className="exp-display-container">
          {experience.length > 0 ? (
            <h2 className="exp-display-heading">Experience</h2>
          ) : null}

          {experience.map((exp) => {
            return (
              <div key={exp.id} className="exp-entry">
                <div className="left-info">
                  <h3 className="entry-date">
                    {exp.expStart} {exp.expStart && exp.expEnd ? "- " : null}{" "}
                    {exp.expEnd}
                  </h3>
                </div>

                <div className="right-info">
                  <div className="exp-info">
                    <h3 className="exp-company">{exp.expCompany}</h3>
                    <h3 className="exp-position">{exp.expPosition}</h3>
                  </div>
                  <h3 className="exp-desc">{exp.expDesc}</h3>
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
        <ExperienceDisplay />
      </section>
    </>
  );
}

export default Display;
