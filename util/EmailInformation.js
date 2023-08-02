const emailBody = `
<h1>Bonjour,</h1>
<p>Votre compte a été créé avec succès !</p>
<p>Nous vous souhaitons la bienvenue parmi nous.</p>
<p>Si vous avez des questions ou avez besoin d'aide, n'hésitez pas à nous contacter.</p>
<p>Merci d'avoir choisi notre service.</p>
<p>Cordialement,</p>
<p>L'équipe de notre service</p>
`;

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'garagenotificiation@gmail.com',
        pass: 'xmfqlhsxkgslrbdp'
    }
});

let mailOptions = {
    subject: 'Email de confirmation de création de compte',
    html: emailBody
};
module.exports = {
  transporter,
  mailOptions
};
