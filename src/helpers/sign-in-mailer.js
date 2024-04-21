import nodemailer from 'nodemailer';

// TODO: if emailType is verify then findUser and save the hashed verifyToken (use bycrypt for hashing token) and its expiry date.
export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "af94d6a79fa7c3",
              pass: "e9c705131f0230"
            }
          });
        const mailInfo = {
            from: 'muhammadashirone@gmail.com',
            to: email, 
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", 
            text: "Hello world?", 
            html: "<h1>MAIL FROM ASSESSIFY</h1>", 
        };
        const mailResponse = await transport.sendMail(mailInfo);
        return mailResponse;
    } catch (error) {
        throw new Error(error.message);
    }
}