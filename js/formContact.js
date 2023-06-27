const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
  host: 'serveur_smtp',
  port: 587,
  secure: false, // true si le serveur utilise SSL/TLS
  auth: {
    user: 'adresse_email',
    pass: 'mot_de_passe'
  }
});

// Route pour la soumission du formulaire
app.post('/submit-form', function(req, res) {
  // Récupérer les valeurs des champs du formulaire
  const name = req.body.name;
  const subject = req.body.subject;
  const email = req.body.email;
  const message = req.body.message;

  // Préparer les informations de l'e-mail
  const mailOptions = {
    from: email,
    to: 'adresse_destinataire@example.com', // Remplacez par l'adresse e-mail du destinataire
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).send('Une erreur est survenue lors de l\'envoi du message.');
    } else {
      console.log('E-mail envoyé avec succès ! ID :', info.messageId);
      res.status(200).send('Message envoyé avec succès !');
    }
  });
});

// Démarrer le serveur
app.listen(3000, function() {
  console.log('Serveur en écoute sur le port 3000');
});


// Vous devrez remplacer les valeurs suivantes dans le code JavaScript :

// 'serveur_smtp' : l'adresse du serveur SMTP que vous souhaitez utiliser.
// 'adresse_email' : votre adresse e-mail.
// 'mot_de_passe' : le mot de passe correspondant à votre adresse e-mail.
// 'adresse_destinataire@example.com' : l'adresse e-mail du destinataire.
// De plus, assurez-vous d'installer les dépendances nécessaires en exécutant la commande suivante dans votre projet Node.js :

// css
// Copy code
// npm install express nodemailer body-parser
// Une fois que tout est en place, lorsque vous soumettez le formulaire, les données seront envoyées au serveur, qui enverra ensuite un e-mail au destinataire en utilisant Nodemailer.

// N'oubliez pas d'ajuster les paramètres du serveur SMTP en fonction de votre configuration spécifique.