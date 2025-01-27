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
        <div></div>
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
/*
{education.map((edu, idx) => {
  return (
    <div key={idx}>
      <h3>{edu.eduName}</h3>
      <h3>{edu.eduQual}</h3>
      <h3>{edu.eduStart}</h3>
      <h3>{edu.eduEnd}</h3>
      <h3>{edu.eduLocation}</h3>
    </div>
  );
})}
*/
