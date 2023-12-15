document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("infoForm");
  const displayInfo = document.getElementById("displayInfo");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    displayInfo.innerHTML = `
      <h3>Information Submitted:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;

    // You can add further processing or use this data as needed
  });
});
