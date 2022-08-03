const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlROutes")(app);

app.listen(PORT, function() {
    console.log("PORT listened" + PORT);
});