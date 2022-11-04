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

  let x = req.body.x;
  let y = req.body.y;
  const result1 = x * y

  const user2 = {
    slackUsername: "prinx96",
    operation_type: "multiplication",
    result: result1
  }

 res.status(200).json(user2);
 console.log(user2);
})


// App to listen for a server 
const port = process.env.PORT || 5000;
app.listen(port, () => {console.log("Server running on port 5000");});