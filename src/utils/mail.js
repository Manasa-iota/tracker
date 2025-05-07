import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Project Tracker',
            link: 'https://mailgen.js/'
        }
    });

    const emailBody = mailGenerator.generate(options.mailGenContent);

    const emailText = mailGenerator.generatePlaintext(options.mailGenContent);


    const transporter = nodemailer.createTransport({
        host:process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        secure: false, 
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });
      
    const mail = {
        from: 'mail.projecttracker.example.com',
        to:options.email,
        subject: options.subject,
        text:emailText,
        html: emailBody
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email failed")
    }
}

const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body:{
            name:username,
            intro: 'Welcome to App! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with our App, please click here:',
                button: {
                    color: '#22BC66',
                    text: 'Verify your email',
                    link: verificationUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    
        }
    }
}

const forgotPasswordMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: 'We got a request to reset your password.',
            action: {
                instructions: 'To reset your password, click the button below:',
                button: {
                    color: '#22BC66',
                    text: 'Reset Password',
                    link: verificationUrl
                }
            },
            outro: 'If you didn\'t request this, please ignore this email.'
        }
    };
};




