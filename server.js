const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const path = require('path');
const cors = require('cors');

app.use(cors({
    origin: true, // allow to server to accept request from different origin
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    credentials: true, // allow session cookie from browser to pass through
})); //for cross-origin-resourses
app.use(express.static(path.resolve(__dirname, 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});