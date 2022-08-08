const express = require('express'); //DEPENDENCY
const path = require('path');

const app = express(); //EXPRESS
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); //DATA PARSING
app.use(express.static('public'));
app.use(express.json());

require("/routes/apiRoutes")(app); //ROUTES
require("/routes/htmlRoutes")(app);

app.listen(PORT, function() { //SERVER START
    console.log("Server started @ PORT " + PORT);
});