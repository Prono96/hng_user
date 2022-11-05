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

app.get('/home', async(req, res) => {
  res.status(200).json(user);
});


// Post request 
app.post('/home', (req, res) => {

  const details = {
    operation_type: req.body.operation_type,
    x : req.body.x,
    y : req.body.y
  }

  const numeration = details.operation_type;

  if (numeration == "addition") {
    result = details.x + details.y;
  } else if (numeration == "subtraction") {
    result = details.x - details.y;
  } else if (numeration == "multiplication") {
    result = details.x * details.y;
  } else if (numeration !== "addition" || "subtraction" || "multiplication") {
    result = null;
  }


  const user2 = {
    slackUsername: user.slackUsername,
    result,
    operation_type: numeration 
  }

 res.status(200).json(user2);
 console.log(user2);
})


// App to listen for a server 
const port = process.env.PORT || 5000;
app.listen(port, () => {console.log("Server running on port 5000");});