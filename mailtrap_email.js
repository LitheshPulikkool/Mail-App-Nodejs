// send emails with Nodemailer and SMTP

require("dotenv").config();
console.log(process.env.USER_NAME)
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASS,
  },
});

message = {
  from: "litheshp@yahoo.com",
  to: "litheshp@gmail.com",
  subject: "Subject",
  text: "Hello SMTP Email",
};
transporter.sendMail(message, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
