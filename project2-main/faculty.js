let serialNumber = 1;

function addFaculty() {
  const name = document.getElementById('facultyName').value;
  const number = document.getElementById('facultyNumber').value;

  if (name.trim() === '' || number.trim() === '') {
    alert('Please enter a valid faculty name and number.');
    return;
  }

  const tableBody = document.getElementById('facultyTable').querySelector('tbody');
  const row = tableBody.insertRow();

  row.innerHTML = `
    <td>${serialNumber++}</td>
    <td>${name}</td>
    <td>${number}</td>
    <td><input type="checkbox" /></td>
    <td><button onclick="deleteFaculty(this)">Delete</button></td>
  `;

  document.getElementById('facultyName').value = '';
  document.getElementById('facultyNumber').value = '';
}

function deleteFaculty(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
