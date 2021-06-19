function onFormSubmit() {
    var formData = readFormData();
}

function readFormData() {
    var formData = {};

    formData["fullName"] = document.getElementById("fullName").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["salaray"] = document.getElementById("salaray").value;
    formData["location"] = document.getElementById("location").value;

    return formData;
    
}