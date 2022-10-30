var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json({extended: false}));

const user = { 
slackUsername: 'prinx96', 
backend: true, 
age: 26, 
bio: 'I am Promise Prince, the coolest backend developer ever'
}

app.get('/home', (req, res) => {
  res.status(200).json(user);
});


// App to listen for a server 
const port = process.env.PORT || 5000;
app.listen(port, () => {console.log("Server running on port 5000");});