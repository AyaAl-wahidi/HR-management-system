'use strict'

let salCount = [];
let objArr = [];
let retriveArr = [];
let departments = [];

let empNumInAdministration = 0;
let empNumInFinance = 0;
let empNumInDevelpoment = 0;
let empNumInMarkiting = 0;
let salaryInAdministration = 0;
let salaryInFinance = 0;
let salaryInDevelpoment = 0;
let salaryInMarkiting = 0;
let avgSalaryInAdministration = 0;
let avgSalaryInFinance = 0;
let avgSalaryInDevelpoment = 0;
let avgSalaryInMarkiting = 0;

getDataFromLS();
allDepData();

function getDataFromLS() {
    if (localStorage.length !== 0) {
        retriveArr = localStorage.getItem("employe");
        objArr = JSON.parse(retriveArr);
        console.log("after LS" + retriveArr);
        console.log("after Parse", objArr);
    }
    return objArr;
}

function totalSalary(arr) {
    let sum = 0;
    let avg = 0;
    for (const key of arr) {
        sum += key;
    }
    avg = sum / arr.length;
    // console.log("The Avg for all departments", avg);
    // console.log("TotalSalary for all departments", sum);
}

function allDepData() {

    for (const key of objArr) {
        salCount.push(key.empSalary);
        if (key.empDep == "Administration") {
            empNumInAdministration++;
            salaryInAdministration += key.empSalary;
        } else if (key.empDep == "Finance") {
            empNumInFinance++;
            salaryInFinance += key.empSalary;
        } else if (key.empDep == "Development") {
            empNumInDevelpoment++;
            salaryInDevelpoment += key.empSalary;
        } else if (key.empDep == "Marketing") {
            empNumInMarkiting++;
            salaryInMarkiting += key.empSalary;
        }

        avgSalaryInAdministration = salaryInAdministration / empNumInAdministration;
        avgSalaryInFinance = salaryInFinance / empNumInFinance;
        avgSalaryInDevelpoment = salaryInDevelpoment / empNumInDevelpoment;
        avgSalaryInMarkiting = salaryInMarkiting / empNumInMarkiting;

        // console.log("empNumInAdministration", empNumInAdministration);
        // console.log("salaryInAdministration", salaryInAdministration);
        // console.log("avgSalaryInAdministration", avgSalaryInFinance);

        // console.log("empNumInFinance", empNumInFinance);
        // console.log("salaryInFinance", salaryInFinance);
        // console.log("avgSalaryInFinance", avgSalaryInFinance);

        // console.log("empNumInDevelpoment", empNumInDevelpoment);
        // console.log("salaryInDevelpoment", salaryInDevelpoment);
        // console.log("avgSalaryInDevelpoment", avgSalaryInDevelpoment);

        // console.log("empNumInMarkiting", empNumInMarkiting);
        // console.log("salaryInMarkiting", salaryInMarkiting);
        // console.log("avgSalaryInMarkiting", avgSalaryInMarkiting);

        totalSalary(salCount);
    }
}

renderTheTable();

function renderTheTable() {
    const departmentTable = document.getElementById("departmentTable");
    const trAdmin = document.createElement("tr");
    const trFinance = document.createElement("tr");
    const trDevelpoment = document.createElement("tr");
    const trMarkiting = document.createElement("tr");

    departmentTable.appendChild(trAdmin);
    departmentTable.appendChild(trFinance);
    departmentTable.appendChild(trDevelpoment);
    departmentTable.appendChild(trMarkiting);


// How to insert the text content to the Employee card by using the innerHTML with tags
    trAdmin.innerHTML = `
<td>Administration</td>
<td>${empNumInAdministration}</td>
<td>${salaryInAdministration.toFixed(2)}</td>
<td>${avgSalaryInAdministration.toFixed(2)}</td>
`;

    trFinance.innerHTML = `
<td>Finance</td>
<td>${empNumInFinance}</td>
<td>${salaryInFinance.toFixed(2)}</td>
<td>${avgSalaryInFinance.toFixed(2)}</td>
`;

    trDevelpoment.innerHTML = `
<td>Develpoment</td>
<td>${empNumInDevelpoment}</td>
<td>${salaryInDevelpoment.toFixed(2)}</td>
<td>${avgSalaryInDevelpoment.toFixed(2)}</td>
`;

    trMarkiting.innerHTML = `
<td>Markiting</td>
<td>${empNumInMarkiting}</td>
<td>${salaryInMarkiting.toFixed(2)}</td>
<td>${avgSalaryInMarkiting.toFixed(2)}</td>
`;

    // The Footer in the Department Information table
    const departmentTableFooter = document.getElementById("tableFooter");
    const totalEmployees = document.getElementById("totalEmployees");
    const totalSalary = document.getElementById("totalSalary");
    const totalAverageSalary = document.getElementById("averageSalary");

    departmentTable.appendChild(departmentTableFooter);

    totalEmployees.textContent = empNumInAdministration + empNumInFinance + empNumInDevelpoment + empNumInMarkiting;
    totalSalary.textContent = (salaryInAdministration + salaryInFinance + salaryInDevelpoment + salaryInMarkiting).toFixed(2);
    totalAverageSalary.textContent = (avgSalaryInAdministration + avgSalaryInFinance + avgSalaryInDevelpoment + avgSalaryInMarkiting).toFixed(2);
}
