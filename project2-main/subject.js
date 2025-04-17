// script.js
function addSubject() {
    const name = document.getElementById('subjectName').value;
    const type = document.getElementById('subjectType').value;
    const hours = document.getElementById('subjectHours').value;
  
    if (name.trim() === '' || hours.trim() === '' || hours <= 0) {
      alert('Please enter a valid subject name and hours.');
      return;
    }
  
    const tableBody = document.getElementById('subjectTable').querySelector('tbody');
    const row = tableBody.insertRow();
  
    row.innerHTML = `
      <td>${name}</td>
      <td>${type}</td>
      <td>${hours}</td>
      <td><button onclick="deleteSubject(this)">Delete</button></td>
    `;
  
    document.getElementById('subjectName').value = '';
    document.getElementById('subjectHours').value = '';
  }
  
  function deleteSubject(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }
  