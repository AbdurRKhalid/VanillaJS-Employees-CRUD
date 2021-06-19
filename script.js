var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateEmployee(formData);
  }
  resetForm();
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
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
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
  cell4.innerHTML = `<a onClick= "editEmployee(this);">Edit</a> <a onClick="deleteEmployee(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("designation").value = "";
  document.getElementById("salaray").value = "";
  document.getElementById("location").value = "";
  selectedRow = null;
}

function editEmployee(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("designation").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salaray").value = selectedRow.cells[2].innerHTML;
  document.getElementById("location").value = selectedRow.cells[3].innerHTML;
}

function updateEmployee(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.designation;
  selectedRow.cells[2].innerHTML = formData.salaray;
  selectedRow.cells[3].innerHTML = formData.location;
}

function deleteEmployee(td) {
  if (confirm("Are you sure you want to delete this Employee?")) {
    var row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
