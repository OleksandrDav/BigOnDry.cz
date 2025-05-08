const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async createAppealEmail(email, name, company, topic, phone, message) {
    console.log(`Email sent to ${email}`);
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `We've received your information request`,
      text: "",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Information Request Received</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 30px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header img {
            max-height: 60px;
        }
        h2 {
            color: #891043;
        }
        p, li {
            color: #555555;
            line-height: 1.6;
        }
        ul {
            padding-left: 20px;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #999999;
            text-align: center;
        }
        .highlight {
            color: #891043;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://www.bigondry.com/wp-content/uploads/2020/12/Logo-BIGonDRY.png" alt="Company Logo" />
        </div>
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We have received your request regarding <span class="highlight">"${topic}"</span>.</p>
        <p>Our team is reviewing the details and will get back to you shortly.</p>
        <p>Here is a summary of your message:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Company:</strong> ${company}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>If you have any additional questions or information to share, feel free to reply to this email.</p>
        <p>Best regards,<br><span class="highlight">The Support Team</span></p>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
        </div>
    </div>
</body>
</html>
`,
    });
  }
}

module.exports = new MailService();
