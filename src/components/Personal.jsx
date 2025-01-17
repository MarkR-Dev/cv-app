/* 
todo:
  bonus- svg of person?
  bonus- dropdown?

  correct way to handle the change?
*/

function Personal({ personal, updatePersonal }) {
  function handleNameChange(e) {
    updatePersonal({ ...personal, name: e.target.value });
  }

  function handleEmailChange(e) {
    updatePersonal({ ...personal, email: e.target.value });
  }

  function handlePhoneChange(e) {
    updatePersonal({ ...personal, phone: e.target.value });
  }

  function handleGithubChange(e) {
    updatePersonal({ ...personal, github: e.target.value });
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
