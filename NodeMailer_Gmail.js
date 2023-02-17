const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'litheshcartapp@gmail.com',
    pass: 'Lithu143@'
  }
});

const mailOptions = {
  from: 'litheshp@gmail.com',
  to: 'litheshp@yahoo.com',
  subject: 'Subject',
  text: 'Email content'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
  }
});