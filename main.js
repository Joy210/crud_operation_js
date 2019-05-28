onFormSubmit = () => {
    const formData = readFormData();
    insertNewRecord(formData);
}

readFormData = () => {
    const formData = {};

    formData['username'] = document.getElementById('username').value;
    formData['email'] = document.getElementById('email').value;
    formData['contact'] = document.getElementById('contact').value;

    return formData;
}

insertNewRecord = (data) => {
    const table = document.getElementById('studentList').getElementsByTagName('tbody')[0];

    const newRow = table.insertRow(table.length);

    cell_1 = newRow.insertCell(0);
    cell_1.innerHTML = data.username;

    cell_2 = newRow.insertCell(1);
    cell_2.innerHTML = data.email;

    cell_3 = newRow.insertCell(2);
    cell_3.innerHTML = data.contact;

    cell_4 = newRow.insertCell(3);
    cell_4.innerHTML = `
        <button class='btn btn-primary btn-sm'>Edit</button>
        <button class='btn btn-danger btn-sm '>Delete</button>
    `;

}