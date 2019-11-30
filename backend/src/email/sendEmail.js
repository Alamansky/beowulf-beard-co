const { transport } = require("../vendor/nodemailer");

module.exports = mailResponse = async (recipient, subject, message) =>
  await transport.sendMail({
    from: "service@beowulf.com",
    to: recipient,
    subject: subject,
    html: message
  });
