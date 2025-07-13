const employeeData = [
  {
    id: 1,
    FirstName: "JOhn",
    LastName: "Doe",
    Email: "vigneshvickybsc1999@gmail.com",
    Department: "IT",
    Role: "Junior",
  },
  {
    id: 2,
    FirstName: "Ram",
    LastName: "kar",
    Email: "Ram1999@gmail.com",
    Department: "HR",
    Role: "Associate",
  },
  {
    id: 3,
    FirstName: "Pooja",
    LastName: "shree",
    Email: "pooja1999@gmail.com",
    Department: "Accounts",
    Role: "senior",
  },
];
//Form show and hide-----------------
const showForm = () => {
  console.log("Button clicked");

  const form = document.getElementById("Form");
  form.classList.toggle("hidden");
};
const button = document.getElementById("add-employee");
button.addEventListener("click", showForm);

//----------------------------------------------------

//Initial rendering and Display card blueprint-------------------
const employeeList = () => {
  const employeeListDiv = document.getElementById("employeeList");
  employeeListDiv.innerHTML = ""; // Clear previous content

  employeeData.forEach((employee) => {
    const employeeItem = document.createElement("div");
    employeeItem.className = "employee-item";
    employeeItem.innerHTML = `            <h2>${employee.FirstName} ${employee.LastName}</h2>
           <h3>Email: ${employee.Email}</h3>
           <h4> Department: ${employee.Department}</h4>
            <h4>Role: ${employee.Role}</h4>
            <button class="delete-button">Delete</button>
            <button class="edit-button" value="${employee.id}">Edit</button>`;
    employeeListDiv.appendChild(employeeItem);
  });
};

employeeList();
//---------------------------------------------------------------------------

//Edit Functionality -------------------------------------------------
const editEmployee = (id) => {
  const employee = employeeData.find((emp) => emp.id === id);
  if (employee) {
    document.getElementById("Fname").value = employee.FirstName;
    document.getElementById("Lname").value = employee.LastName;
    document.getElementById("email").value = employee.Email;
    document.getElementById("department").value = employee.Department;
    document.getElementById("role").value = employee.Role;

    // Show the form
    showForm();
  }
};
const editButtons = document.querySelectorAll(".edit-button");
const handleEditButtonClick = () => {
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log(event);

      console.log("Edit button clicked");
      const id = parseInt(event.target.value, 10); // read id from button value
      editEmployee(id); // call the edit function
    });
  });
};

console.log("Edit buttons:", editButtons);

handleEditButtonClick();
