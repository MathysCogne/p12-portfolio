<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Valider les données
   if (
      !empty($_POST['name']) &&
      !empty($_POST['subject']) &&
      !empty($_POST['email']) &&
      !empty($_POST['message'])
   ) {
      // Récupérer les données du formulaire et nettoyer
      $name = htmlspecialchars($_POST['name']);
      $subject = htmlspecialchars($_POST['subject']);
      $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
      $message = htmlspecialchars($_POST['message']);

      // Adresse email sur laquelle vous souhaitez recevoir les messages
      $to = "contact@mathys-cognefoucault.fr";

      // Préparer le contenu de l'email
      $email_content = "Nom: $name\n";
      $email_content .= "Sujet: $subject\n";
      $email_content .= "Email: $email\n";
      $email_content .= "Message:\n$message\n";

      // En-têtes de l'email
      $headers = "From: $email\r\n";
      $headers .= "Reply-To: $email\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

      // Envoyer l'email avec le protocole SMTP
      $subject = "PORFOFOLIO - Nouveau message depuis le formulaire de contact";

      // Envoyer l'email avec SMTP
      mail($to, $subject, $email_content, $headers, "-f $email");

      // Envoyer une réponse au formulaire pour indiquer que le traitement a été effectué avec succès
      http_response_code(200); // OK
      echo "Le formulaire a été soumis avec succès.";
   } else {
      // Si les données sont manquantes, envoyer une réponse d'erreur
      http_response_code(400); // Bad Request
      echo "Veuillez remplir tous les champs du formulaire.";
   }
}
