const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();
const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Node Mailer

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.USER_LOGIN,
    pass: process.env.USER_PW
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/api/send', (req, res, next) => {
  var name = req.body.name
  var phone = req.body.phone
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n message: ${message} `

  var mail = {
    from: name,
    to: 'office@escapesfl.com', // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        success:false
      })
    } else {
      res.json({
        success:true
      })
    }
  })
})


//SERVER SETUP//

const PORT = process.env.PORT ||  3002;
app.listen(PORT);
console.log(`SERVER STARTED AT PORT ${PORT}`);