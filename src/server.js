const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// e-mail 
const transporter = nodemailer.createTransport({
  service: 'outlook.office365.com',
  auth: {
    user: 'XXXXXXX@ciser.com.br',
    pass: '',
  },
});

app.post('/send-email', (req, res) => {
  const { subject, name, email, message } = req.body;

  // Destinatários
  let recipientEmail;
  switch (subject) {
    case 'Financeiro':
      recipientEmail = 'financeiro@intercargo.com.br';
      break;
    case 'Coleta São Paulo':
      recipientEmail = 'coletasp@intercargo.com.br';
      break;
    case 'Coleta Joinville':
      recipientEmail = 'coletajv@intercargo.com.br';
      break;
    case 'SAC Joinville':
      recipientEmail = 'sac@intercargo.com.br';
      break;
    case 'SAC São Paulo':
      recipientEmail = 'sacsp@intercargo.com.br';
      break;
    case 'Ouvidoria':
      recipientEmail = 'ouvidoria@intercargo.com.br';
      break;
    case 'Cotação':
      recipientEmail = 'comercial01.jvl@intercargotransportes.com.br';
      break;
  }

  const mailOptions = {
    from: email, 
    to: recipientEmail, 
    subject: `Contato - ${subject}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Erro ao enviar o e-mail.');
    }
    console.log('E-mail enviado: ' + info.response);
    res.status(200).send('E-mail enviado com sucesso.');
  });
});

// Iniciar o servidor
app.listen(993, () => {
  console.log('Servidor rodando na porta 993');
});
