const nodemailer = require('nodemailer');

// Function to send password reset email
const sendPasswordResetEmail = async (email, token) => {
    try {
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Compose email message
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset', // Subject line
            text: `Click the link below to reset your password:\n\n${process.env.BASE_URL}/reset-password/${token}` // Plain text body
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw new Error('Failed to send password reset email');
    }
};

module.exports = { sendPasswordResetEmail };
