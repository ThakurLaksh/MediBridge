let selectedSection = '';

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    localStorage.setItem('username', user);
  } else {
    alert('Please enter username and password');
  }
}

function toggleSection(id) {
  const el = document.getElementById(id);
  el.classList.toggle('hidden');
}

function setSection(section) {
  selectedSection = section;
  alert(section + ' Selected');
}

function submitRecord() {
  const file = document.getElementById('fileUpload').files[0];
  const date = document.getElementById('recordDate').value;
  const time = document.getElementById('recordTime').value;
  const doctor = document.getElementById('doctorName').value;

  if (!selectedSection || !file || !date || !time || !doctor) {
    alert('Please fill out all fields.');
    return;
  }

  const successMessage = document.getElementById('successMessage');
  successMessage.classList.remove('hidden');
  successMessage.innerHTML = `
    <p>Thanks for submitting the record!</p>
    <button class="btn" onclick="goHome()">Back to Dashboard</button>
  `;
}

function goHome() {
  document.getElementById('dashboardPage').scrollIntoView({ behavior: 'smooth' });
}

function googleSignIn() {
  alert('Google Sign-In functionality coming soon.');
}
