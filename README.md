# Mail-App-Nodejs
### Features
- This applictaion is developed to demo various solutions to send email using Node.js.
- Using a transactional email API AWS SES
- Send emails with Nodemailer(npm module) and SMTP.(Fake SMTP with Mailtrap)
- Send emails with service like Outlook,Gmail etc, using Nodemailer(npm module)
## Transactional email API : AWS SES

Using a hosted API, transactional email providers let you send emails from within your app. You can handle message assembly, sending, and deliverability by using an email API rather than handling email servers and their needs yourself. When you require a dependable provider that can be quickly integrated, can support high-volume sending, and has a wealth of capabilities, transactional email APIs are useful.

On the market, there are various transactional email services. Amazon SES, Postmark, SparkPost, SendGrid, Mailgun, and Mailchimp Transactional are among the most widely used (formerly Mandrill). Although the majority of them provide free or inexpensive starting plans, all of them are paid services.

### Follow the below steps :
- Create an Account in AWS
- start an Amazon Simple Email Service(SES)
- install required npm modules.
- run the below code (file from this POC)

`node aws_ses_sendemail`
