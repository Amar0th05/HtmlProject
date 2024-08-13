document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Hardcoded username and password for example
    const validUsername = 'Amarnath';
    const validPassword = '12345';

    // Get values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered values match the hardcoded values
    if (username === validUsername && password === validPassword) {
        window.location.href = 'http://127.0.0.1:5500/html/Aboutme.html'; // Redirect to another page
    } else {
        document.getElementById('error').textContent = 'Invalid username or password';
    }
});
