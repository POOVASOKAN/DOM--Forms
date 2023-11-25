document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const tableBody = document.getElementById("tableBody");
  const userData = []; 

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;

    const foodChoices = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((checkbox) => {
        const label = checkbox.nextElementSibling;
        if (label) {
          foodChoices.push(label.textContent || label.innerText);
        }
      });

    console.log("Food Choices:", foodChoices);

    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    userData.push({
      firstame,
      lastName,
      address,
      pincode,
      gender,
      foodChoices,
      state,
      country,
    });

    updateTable();

    form.reset();
  });

  function updateTable() {
    tableBody.innerHTML = "";

    userData.forEach((user) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.address}</td>
                <td>${user.pincode}</td>
                <td>${user.gender}</td>
                <td>${formatFoodChoices(user.foodChoices)}</td>
                <td>${user.state}</td>
                <td>${user.country}</td>
            `;
      tableBody.appendChild(newRow);
    });
  }

  // Function to format food choices array for display
  function formatFoodChoices(choices) {
    return choices.join(", ");
  }
});
