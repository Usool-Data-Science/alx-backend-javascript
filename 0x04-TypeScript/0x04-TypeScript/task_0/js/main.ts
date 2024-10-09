interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Adeshina",
    lastName: "Ibrahim",
    age: 30,
    location: "Ede",
}

const student2: Student = {
    firstName: "Tiamiyu",
    lastName: "Suliyat",
    age: 27,
    location: "Ede",
}

const studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);

let myTable = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let row = myTable.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();

    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}

document.body.appendChild(myTable);