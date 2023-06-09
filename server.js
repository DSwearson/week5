
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express()
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './build'))); //this will server reac tfiles
app.use(express.static(path.resolve(__dirname, './public'))); //this will serve imgs,css files etc
// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {



    res.sendFile(path.resolve(__dirname ,'./client/build', 'index.html'));
});

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
})