const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parse request content-type: application/jason
app.use(bodyParser.json());

//parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//simple route
app.get("/", (req,res) => {
	res.json({message: "welcome node.js"});
});

//Routes
require("./app/routes/customer.routes.js")(app);

//set port, lsten for request 
app.listen(3000, () => {
	console.log("server running in port 3000");
});