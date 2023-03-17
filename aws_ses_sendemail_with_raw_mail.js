// Using a transactional email API

require("dotenv").config();
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
var mimemessage = require("mimemessage");
const fs = require("fs");

// Set the region
AWS.config.update({ region: "ap-south-1" });

var mailContent = mimemessage.factory({
  contentType: "multipart/mixed",
  body: [],
});

// Create sendEmail params

mailContent.header("From", "litheshp@gmail.com>");
mailContent.header("To", "lithesh.pulikkool@cognizant.com");
mailContent.header("Subject", "Testing Rwa mail form SES");

var alternateEntity = mimemessage.factory({
  contentType: "multipart/alternate",
  body: [],
});

var htmlEntity = mimemessage.factory({
  contentType: "text/html;charset=utf-8",
  body:
    "   <html>  " +
    "   <head></head>  " +
    "   <body>  " +
    "   <h1>Hello!</h1>  " +
    "   <p>Please see the attached file for a list of    customers to contact.</p>  " +
    "   </body>  " +
    "  </html>  ",
});

var plainEntity = mimemessage.factory({
  body: "Please see the attached file for a list of    customers to contact.",
});

alternateEntity.body.push(htmlEntity);

var data = fs.readFileSync("sampleAttachment.txt");

var attachmentEntity = mimemessage.factory({
  contentType: "text/plain",
  contentTransferEncoding: "base64",
  body: data.toString("base64").replace(/([^**\0**]{76})/g, "$1\n"),
});

attachmentEntity.header(
  "Content-Disposition",
  'attachment ;filename="customers.txt"'
);

mailContent.body.push(attachmentEntity);

// Create the promise and SES service object
var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" }).sendRawEmail(
  {
    RawMessage: { Data: mailContent.toString() },
  },
  (err, sesdata, res) => {}
);
