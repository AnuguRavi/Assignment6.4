// declaring the Employee Array
var Employee = [
    //Objects of the Employee
    {
        name : "Ravi Anugu",
        age : 23,
        salary : 35000,
        city : "Hyderabad",
        state : "Telangana",
        pincode : 500081
    },
    {
        name : "Surya Prakash",
        age : 23,
        salary : 25000,
        city : "Bangalore",
        state : "Karnataka",
        pincode : 560036
    },
    {
        name : "Jai Singh",
        age : 23,
        salary : 30000,
        city : "Pune",
        state : "Maharashtra",
        pincode : 400034
    },
    {
        name : "Ravi Jaroli",
        age : 23,
        salary : 23000,
        city : "Bangalore",
        state : "Karnataka",
        pincode : 560068
    },
    {
        name : "Irfan",
        age : 24,
        salary : 45000,
        city : "Bangalore",
        state : "Karnataka",
        pincode : 560068
    }
];
var i;
//Displaying the output on console
for ( i = 0; i < Employee.length; i += 1 ){
    console.log("Name : ", Employee[i].name);
    console.log("Age : ", Employee[i].age);
    console.log("Salary : ", Employee[i].salary);
    console.log("City : ", Employee[i].city);
    console.log("State : ", Employee[i].state);
    console.log("Pincode : ", Employee[i].pincode);
    console.log("************************************************");
}