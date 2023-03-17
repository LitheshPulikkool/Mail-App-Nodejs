
// Using a transactional email API

require('dotenv').config()
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
//AWS.config.update({ "accessKeyId": process.env.YOUR_ACCESS_KEY_ID, "secretAccessKey": process.env.YOUR_SECRET_ACCESS_KEY, "region": "ap-south-1" });
AWS.config.loadFromPath('./config.json');

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});

// Create sendEmail params 
var params = {
  Destination: {
    /* required */
    CcAddresses: [
      "lithesh.pulikkool@cognizant.com",
      /* more items */
    ],
    ToAddresses: [
      "litheshp@yahoo.com",
      "lithesh.pulikkool@cognizant.com",
      /* more items */
    ],
  },
  Message: {
    /* required */
    Body: {
      /* required */
      Html: {
        Charset: "UTF-8",
        Data: "Test Mail from Talent Point",
      },
      Text: {
        Charset: "UTF-8",
        Data: "<h1>Test Mail from Talent Point</h1>",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email",
    },
  },
  Source: "litheshp@gmail.com" /* required */,
  ReplyToAddresses: [
    "litheshp@gmail.com",
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
