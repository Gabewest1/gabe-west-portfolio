const nodemailer = require('nodemailer')

function sendEmail(name, email, message) {
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gabewest16@gmail.com", // generated ethereal user
            pass: "490501GGg"  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: email, 
        to: 'gabewest16@gmail.com',
        subject: 'INTERESTED CLIENT/EMPLOYEER',
        text: message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    })
}

module.exports = sendEmail
