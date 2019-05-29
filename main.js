let selectedRow = null;

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const studentList = document.getElementById('studentList');
const error = document.getElementById('validationError');

// onclick event
onFormSubmit = () => {
    const formData = readFormData();

    if (validate()) {
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateData(formData);
    }

    resetForm();
}

// Read data from form
readFormData = () => {
    const formData = {};

    formData['fullName'] = fullName.value;
    formData['email'] = email.value;
    formData['contact'] = contact.value;

    return formData;
}

// insert a new row
insertNewRecord = (data) => {
    const table = studentList.getElementsByTagName('tbody')[0];

    // const newRow = table.insertRow(table.length);
    const newRow = table.insertRow(table.length);

    cell_1 = newRow.insertCell(0);
    cell_1.innerHTML = data.fullName;

    cell_2 = newRow.insertCell(1);
    cell_2.innerHTML = data.email;

    cell_3 = newRow.insertCell(2);
    cell_3.innerHTML = data.contact;

    cell_4 = newRow.insertCell(3);
    cell_4.innerHTML = `
        <button class='btn btn-primary btn-sm' onClick="onEdit(this)">Edit</button>
        <button class='btn btn-danger btn-sm' onClick="onDelete(this)">Delete</button>
    `;

}

// reset form
resetForm = () => {
    fullName.value = '';
    email.value = '';
    contact.value = '';

    selectedRow = null;
}

// edit inserted data
onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;

    fullName.value = selectedRow.cells[0].innerHTML;
    email.value = selectedRow.cells[1].innerHTML;
    contact.value = selectedRow.cells[2].innerHTML;
}


// delete data
onDelete = (td) => {
    selectedRow = td.parentElement.parentElement;

    if (confirm("Are you sure to delete this record?"))
        selectedRow.remove();
    // studentList.deleteRow(selectedRow.rowIndex);
    // resetForm();
}

// update data
updateData = (formData) => {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.contact;
}

validate = () => {
    isValid = true;

    if (fullName.value == '') {
        isValid = false;
        error.classList.remove('d-none');
    } else {
        isValid = true;
        error.classList.contains('d-none');
    }

    return isValid;
}