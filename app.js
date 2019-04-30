const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer")
const cors = require('cors')
const path = require("path")
const email = require("./email.js")






const app = express()
app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../porfolio')));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  const output= `<p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul><li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>` 


  //Nodemailer example

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
  service: 'Gmail', // no need to set host or port etc.
  auth: {
      user: email.email.user,
      pass: email.email.pass
  }
});

// send mail with defined transport object
let mailOptions = {
  from: '"Nodemailer Contact" <your@email.com>', // sender address
  to: 'jorgegmouta@gmail.com', // list of receivers
  subject: 'Portfolio Contact Request', // Subject line
  html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    res.send({msgStatus:"Sorry, your message failed to be sent. Please try again later or contact me at one of my social profiles."});
      return console.log(error);
     
  }
 
  res.send({
    msgSent:true,
    msgStatus:"Thank you for your message, I'll reply as soon as possible.",
    name:"",
    email:"",
    message:""
});
});

  
});


app.listen(port, () => console.log(`Listening on port ${port}`));

