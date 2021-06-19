function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    var formData = {};

    formData["fullName"] = document.getElementById("fullName").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["salaray"] = document.getElementById("salaray").value;
    formData["location"] = document.getElementById("location").value;

    return formData;
    
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell = newRow.insertCell(0);
    cell.innerHTML = data.fullName;
    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.designation;
    var cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.salaray;
    var cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.location;
    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a>Edit</a> <a>Delete</a>`;
}