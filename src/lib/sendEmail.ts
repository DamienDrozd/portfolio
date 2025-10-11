import nodemailer from 'nodemailer';

type EmailParams = {
    name: string;
    email: string;
    message: string;
};

export async function sendEmail({ name, email, message }: EmailParams) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: 'damien.drozd@icloud.com',
        subject: `Contact Portfolio - ${name}`,
        replyTo: email,
        html: `<p><b>Nom:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    return await transporter.sendMail(mailOptions);
}
