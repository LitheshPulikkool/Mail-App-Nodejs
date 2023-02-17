# Mail-App-Nodejs
### Features
- This applictaion is developed to demo various solutions to send email using Node.js.
- Using a transactional email API AWS SES
- Send emails with Nodemailer(npm module) and SMTP.(Fake SMTP with Mailtrap)
- Send emails with service like Outlook,Gmail etc, using Nodemailer(npm module)
## Transactional email API : AWS SES

Using a hosted API, transactional email providers let you send emails from within your app. You can handle message assembly, sending, and deliverability by using an email API rather than handling email servers and their needs yourself. When you require a dependable provider that can be quickly integrated, can support high-volume sending, and has a wealth of capabilities, transactional email APIs are useful.

On the market, there are various transactional email services. Amazon SES, Postmark, SparkPost, SendGrid, Mailgun, and Mailchimp Transactional are among the most widely used (formerly Mandrill). Although the majority of them provide free or inexpensive starting plans, all of them are paid services.

### Follow the below steps run the code:
- Create an Account in AWS
- start an Amazon Simple Email Service(SES)[AWS SES](https://mailtrap.io/](https://aws.amazon.com/ses/ "AWS SES")
- install required npm modules.
- check your environment variables
- run the below code (file from this POC)

`node aws_ses_sendemail`

## Send emails with Nodemailer(npm module) and SMTP.(Fake SMTP with Mailtrap)

Nodemailer is a Node.js module used for sending emails and is the most popular Node.js email package. You can use Nodemailer to create HTML or plain-text emails, add attachments, and send your emails through different transport methods, including built-in SMTP support. It requires Node.js 6.0 or newer.

Nodemailer’s createTransport function specifies which method you want to use for sending email. It takes the connection data and credentials as an argument. In this case, since SMTP is the preferred transport, you will need to define an SMTP host, port, and credential password for accessing a host SMTP server.

To get a host URL, you need an SMTP server. For development purposes, you can use Mailtrap, or a similar service, to serve as a fake SMTP server. A fake SMTP server lets you avoid cluttering your real account with multiple tests while still seeing how your test emails behave — do all the buttons work the way they’re supposed to, is the formatting still correct after sending, and so on.

Create a Mailtrap account if you don’t already have one. In the Integrations dropdown on the dashboard, select Nodemailer and copy the credentials displayed.

### Follow the below steps run the code:
- Create an Account in [Mailtrap](https://mailtrap.io/ "Mailtrap")
- Get the credentials from the mailtrap account
- install required npm modules.
- check your environment variables
- run the below code (file from this POC)

`node mailtrap_email`

