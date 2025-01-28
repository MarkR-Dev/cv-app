/* 
  todo: svgs?
*/

function Display({ personal, education }) {
  function PersonalDisplay() {
    return (
      <>
        <div>
          <h2>{personal.name}</h2>
          <div>
            <h3>{personal.email}</h3>
            <h3>{personal.phone}</h3>
            <h3>{personal.github}</h3>
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
      <section>
        <PersonalDisplay />
        <EducationDisplay />
      </section>
    </>
  );
}

export default Display;
