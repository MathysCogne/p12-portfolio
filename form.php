<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Récupérer les données du formulaire
   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $email = $_POST['email'];
   $message = $_POST['message'];

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

   // Envoyer l'email
   mail($to, $subject, $email_content, $headers);

   // Envoyer une réponse au formulaire pour indiquer que le traitement a été effectué avec succès
   http_response_code(200); // OK
   echo "Le formulaire a été soumis avec succès.";
}
