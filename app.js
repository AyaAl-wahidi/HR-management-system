'use strict'

//Create a constructor to generate an employee Object
function Employee(empId, empName, empDep, empLevel, empImage) {
    this.empId = empId;
    this.fullName = empName;
    this.empDep = empDep;
    this.empLevel = empLevel;
    this.empImage = empImage;
    this.empSalary = salaryGenerator(empLevel);
}

// Create a prototype function for calculating the salary using the provided table by generating a random number between the
// minimum and maximum salary for each level
//calculating the random salary you should calculate the net salary where the tax percent is 7.5.
function salaryGenerator(level) {
    let salary = 0;
    let netSalary = 0;
    let taxPercent = 7.5;
    if (level === "Senior") {
        salary = Math.floor(Math.random() * (2000 - 1500) + 1500); // (Math.random()* (Max - Min + 1) + min)
        netSalary = salary - (salary * (taxPercent / 100));
    } else if (level === "Mid-Senior") {
        salary = Math.floor(Math.random() * (1500 - 1000) + 1000);
        netSalary = salary - (salary * (taxPercent / 100));
    } else if (level === "Junior") {
        salary = Math.floor(Math.random() * (1000 - 500) + 500);
        netSalary = salary - (salary * (taxPercent / 100));
    }
    return netSalary;
}

let mainForm = document.getElementById("mainForm");
mainForm.addEventListener('submit', addButtonListener);

//Here we add a listerner to take the action that saved the values in the parameters
function addButtonListener(event) {

    event.preventDefault();
    let fullName = event.target.fullNameInput.value;
    let selectDepartment = event.target.selectDepartment.value;
    let level = event.target.selectLevel.value;
    let imgUrl = event.target.imgUrl.value;

    // Check of the image did not insert by form use the default link
    if (imgUrl == "") {
        imgUrl = "https://i.pinimg.com/474x/f1/da/a7/f1daa70c9e3343cebd66ac2342d5be3f.jpg";
    }

    let newEmp = new Employee(generateUniqueID(), capitalizeFirstLetter(fullName), selectDepartment, level, imgUrl, salaryGenerator(level))
    newEmp.render();
    // mainForm.reset();
}

//This function to make the Name first litter capital
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Employee.prototype.render = function () {

    let administrationDep = document.getElementById("administrationDep");
    let developmentDep = document.getElementById("developmentDep");
    let marketingDep = document.getElementById("marketingDep");
    let financeDep = document.getElementById("financeDep");
    const employeeCard = document.createElement("div");
    const smallLine = document.createElement('hr');
    employeeCard.classList.add("employee");
    employeeCard.appendChild(smallLine);

    // How to insert the text content to the Employee card by using the innerHTML with tags
    employeeCard.innerHTML = `
    <h2>${this.fullName}</h2>
    <img src="${this.empImage}" alt="${this.fullName}">
    <p>ID: ${this.empId}</p>
    <p>Department: ${this.empDep}</p>
    <p>Level: ${this.empLevel}</p>
    <p>Net-Salary: ${this.empSalary.toFixed(2)}</p>
    `;

    // Check the department to know in which div should we added
    if (this.empDep == "Administration") {
        administrationDep.append(employeeCard)
    } else if (this.empDep == "Marketing") {
        marketingDep.append(employeeCard)
    } else if (this.empDep == "Development") {
        developmentDep.append(employeeCard)
    } else if (this.empDep == "Finance") {
        financeDep.append(employeeCard)
    }

    employeeCard.appendChild(smallLine);
};


//Create employees instances was givin in the lab
var employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "Assets/Ghazi.jpg");
var employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "Assets/Lana.jpg");
var employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "Assets/Tamara.jpg");
var employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "Assets/Safi.jpg");
var employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "Assets/Omar.jpg");
var employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "Assets/Rana.jpg");
var employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "Assets/Hadi.jpg");


// You will create a render prototype function to render each employee name with their salary in the home page.
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();

//Generate a unique ID for each employee
function generateUniqueID() {
    let min = 1000;
    let max = 9999;
    const uniqueId = Math.floor(Math.random() * (max - min + 1)) + min;
    return uniqueId.toString(); // Convert to string
}

function showForm() {
    const form = document.getElementById('mainForm');
    if (form.style.display === 'none') {
        form.style.display = 'block'; // Show the form
    } else {
        form.style.display = 'none'; // Hide the form
    }
}