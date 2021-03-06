import nodemailer from "nodemailer";
import "dotenv/config";
async function sendMail(userName, userEmail, token) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "sandygoyal29@gmail.com",
      pass: "Sundi*123",
    },
  });
  return await transporter.sendMail({
    from: `"Admin Goyal" <sandygoyal29@gmail.com>`, // sender address
    to: userEmail, // list of receivers
    subject: "Email Confirmation - Registered!", // Subject line
    text: "Test", // plain text body
    html: `Hey ${userName} <br/> Thanks for registering with us. <br/>Please click the <a href="${process.env.URL}/api/users/verifymail/${userEmail}/${token}">link</a> to confirm your email<br/>ThankYou`, // html body
  });
}

export default sendMail;
