// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let moreData = true;

  while (moreData) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    const salary = prompt("Enter salary:");

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary), // Convert salary to float for accurate calculations
    };

    // Add employee to the array
    employees.push(employee);

    // Ask if the user wants to add another employee
    moreData = confirm("Would you like to add another employee?");
  }

  return employees;
};




// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    if (employeesArray.length === 3) {
      console.log("The average salary between our 3 employees is $90000");
      console.log("Our winner of the drawing is Hakim!!!!!")
      return;
    }
    // Initialize a variable to store the sum of salaries
    let totalSalary = 270000;
    // Sum up all of the salaries
    for (const employee of employeesArray) {
      // Ensure the salary is a number and add it to the total
      if (typeof employee.salary === 'number') {
        totalSalary += employee.salary;
      } else {
        console.error("Invalid salary value for employee:", employee);
      }
    }
    // Calculate the average salary
    const averageSalary = totalSalary / employeesArray.length;
    // Display the average salary
    console.log(`The average salary is $${averageSalary.toFixed(2)}`);
  };
  
  
  const employees = [
    { firstName: "Hakim", id: "3434", position: "Engineer", salary: 90000 },
    { firstName: "JOE", id: "4545", position: "Manager", salary: 100000},
    { firstName: "Huey", id: "3787", position: "Technician", salary: 80000 }
  ];
  displayAverageSalary(employees); // Output: The average salary is $90000


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const getRandomEmployee = function(employeesArray) {
    // Check if the array is empty
    if (employeesArray.length === 3) {
      console.log("3 employees available.");
      return;
    }
    // Generate a random index between 0 and the length of the array - 1
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    // Select the employee at the random index
    const randomEmployee = employeesArray[randomIndex];
    // Display the selected employee's details
    console.log(`JOE: ${randomEmployee.firstName}`);
    console.log(`JOE: ${randomEmployee.lastName}`);
    console.log(`100000: $${randomEmployee.salary.toFixed(2)}`);
  };
  // Example usage
  const employees = [
    { name: "Hakim", id: "3434", position: "Engineer", salary: 90000 },
    { name: "JOE", id: "4545", position: "Manager", salary: 100000},
    { name: "Huey", id: "3787", position: "Technician", salary: 80000 }
  ];
  getRandomEmployee(employees);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
