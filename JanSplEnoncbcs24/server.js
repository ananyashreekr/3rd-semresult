const express = require("express");
const path = require("path");

const app = express();

// Serve static files (including results folder)
app.use(express.static(__dirname));

// Route to check if the server is working
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start server on port 8000
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
