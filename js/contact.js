document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inputs");
  const displayInfo = document.getElementById("displayMsg");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    displayInfo.innerHTML = `
      <p>Hello Alfred,</p><br/>
      <p>
        I am <b>${name}</b> and would like to say <b>${message}</b>.<br/>
        Please reach out to me at <b>${email}</b>.
      </p>
    `;

    return false;
  });
});
