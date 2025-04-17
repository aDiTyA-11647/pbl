function addRoom() {
    const number = document.getElementById('roomNumber').value;
    const capacity = document.getElementById('roomCapacity').value;
  
    if (number.trim() === '' || capacity.trim() === '' || capacity <= 0) {
      alert('Please enter a valid room number and capacity.');
      return;
    }
  
    const tableBody = document.getElementById('roomTable').querySelector('tbody');
    const row = tableBody.insertRow();
  
    row.innerHTML = `
      <td>${number}</td>
      <td>${capacity}</td>
      <td><input type="checkbox" /></td>
      <td><button onclick="deleteRoom(this)">Delete</button></td>
    `;
  
    document.getElementById('roomNumber').value = '';
    document.getElementById('roomCapacity').value = '';
  }
  
  function deleteRoom(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }