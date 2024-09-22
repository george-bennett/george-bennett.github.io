// Import the required modules
const express = require('express');
const { Client } = require('pg');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// PostgreSQL connection setup
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'password',  // Replace with your actual password
    port: 5432,
});

// Connect to the PostgreSQL database
client.connect(function (err) {
    if (err) {
        console.error('Failed to connect to PostgreSQL:', err);
        throw err;
    }
    console.log("Connected to PostgreSQL database!");
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Define a route to fetch and display all data in HTML format
app.get('/users', async (req, res) => {
    try {
        // Query the database to fetch all data from the user_info table
        const result = await client.query('SELECT * FROM user_info');
        
        // Render the data in the 'users.ejs' template
        res.render('users', { users: result.rows });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Server error');
    }
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});