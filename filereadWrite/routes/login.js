const express = require('express');
const router = express.Router();

// GET route for displaying the login form
router.get('/login', (req, res) => {
    res.send(`
        <h2>Enter Your Username</h2>
        <form action="/login" method="POST" id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br><br>
            <button type="submit">Submit</button>
        </form>
         
        <script>
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const username = document.getElementById('username').value;
                localStorage.setItem('username', username);
                // You can redirect to another page or perform other actions here
                // For example:
                 window.location.href = '/';
            });
        </script>
    `);
});

router.post('/login', (req, res) => {
    // Handle the form submission if needed
    // Typically, you might process the username here, but we're focusing on localStorage in this example
    res.send('Form submitted successfully.');
});

module.exports = router