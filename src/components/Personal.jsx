/* 
todo:
  bonus- svg of person?
  bonus- dropdown?
*/

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
      <h2>Personal Details</h2>

      <form action="#" id="personal">
        <label htmlFor="name">
          Full Name:
          <input
            id="name"
            name="name"
            type="text"
            value={personal.name}
            onChange={handleNameChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={personal.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="phone">
          Phone:
          <input
            id="phone"
            name="phone"
            type="phone"
            value={personal.phone}
            onChange={handlePhoneChange}
          />
        </label>

        <label htmlFor="github">
          Github:
          <input
            id="github"
            name="github"
            type="text"
            value={personal.github}
            onChange={handleGithubChange}
          />
        </label>
      </form>
    </>
  );
}

export default Personal;
