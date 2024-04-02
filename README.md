# HR-management-system

## **Lab 07 Notes**

### The main steps:
1- Create css style file to put the Header which contains **Navigation bar** with **HTML** href to another pages (Home , Accounting).

2- In HTML main tag shows the **Employee Name & the net Salary** that we'll calculate it later.

3- **Footer** with social media links & the copyright.


### In JS File : 
1- Create a constructor called **Employee** to generate the employees object.

2- Create a function to generate a random sallary depends on the employee level

**s = Math.Floor(Math.random()*(Max - Min)+Min)**

No I have a tax percent = 7.5
So the net salary will shows the salary after calculate tax

**NetSalary = s - ( s * (7.5 / 100))**

3- After that I have the data for each employee to put it in the instace for each one.

4- **Create a Employee.prototype.render** This function will print the data in the main page after calling it by the instance.
<br/>
<br/>
<br/>
<br/>
## Lab 08 Notes
### The MAin Steps
1- Create form in HTML file inside the main for the (Full Name , Departement , Level , Image) for each employee will insert. Some with **text** type another with **select** type, ends with **Submit** button.

2- Worked in the **style.css** file to design the web page as requested.

### In JS file:
1- The lab want to save the data from the user input in the form into variables then create a sperated card for each one.

2- The card will display Employee data (Name , Salary , Image , Dep , Level , **ID**)

3- I will generate a random ID for all new employees and should be 4 digits
**ID = Math.Floor(Math.random() * (9999 - 1000 +1) + 1000)**

4- Will take the data via **addButtonListener** function and define a **new employee object** with all thse data from user then call it with **render** function.
<br/>
<br/>
<br/>
<br/>

### Some Extras

**- Add a default image in case the user forget to insert it.**

**- Make the first litter in the full name capital to make it looks better.**

**- Add a button in the home page for the form, if the user didn't click on it will not show.**

**- Seperate the card by departement**

