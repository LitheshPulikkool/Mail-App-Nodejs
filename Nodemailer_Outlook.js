//NodeJS Nodemailer Outlook

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: "user@outlook.com",
        pass: "password"
    },
    tls: {
        ciphers:'SSLv3'
    }
});
const mailOptions = {
    from: 'hello@example.com',
    to: 'reciever@gmail.com',
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