var student1 = {
    firstName: "Adeshina",
    lastName: "Ibrahim",
    age: 30,
    location: "Ede",
};
var student2 = {
    firstName: "Tiamiyu",
    lastName: "Suliyat",
    age: 27,
    location: "Ede",
};
var studentsList = [];
studentsList.push(student1);
studentsList.push(student2);
var myTable = document.createElement('table');
for (var i = 0; i < studentsList.length; i++) {
    var row = myTable.insertRow();
    var name_1 = row.insertCell();
    var location_1 = row.insertCell();
    name_1.innerHTML = studentsList[i].firstName;
    location_1.innerHTML = studentsList[i].location;
}
document.body.appendChild(myTable);
//# sourceMappingURL=main.js.map