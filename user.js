// Show and hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Show login form
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Show register form
function showRegister() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// User registration
let users = [];
function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    if (username && email) {
        users.push({ username, email });
        alert('Registration successful!');
        showLogin();
    } else {
        alert('Please fill in all fields');
    }
}

// User login
function login() {
    const username = document.getElementById('login-username').value;
    const user = users.find(user => user.username === username);
    if (user) {
        alert(`Welcome, ${user.username}!`);
        showSection('home');
    } else {
        alert('User not found. Please register.');
    }
}

// Admin login
function adminLogin() {
    const adminUsername = document.getElementById('admin-username').value;
    if (adminUsername === 'admin') { // Example username check
        alert('Welcome, Admin!');
        showSection('admin-dashboard');
    } else {
        alert('Access denied.');
    }
}
