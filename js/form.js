const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Créer un objet FormData pour envoyer les données du formulaire
    const formData = new FormData();
    formData.append('name', name);
    formData.append('subject', subject);
    formData.append('email', email);
    formData.append('message', message);

    // Envoyer les données du formulaire via Fetch API
    fetch('form.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            // Cacher le formulaire
            contactForm.style.display = 'none';

            // Afficher le message de confirmation
            confirmationMessage.style.display = 'flex';
        } else {
            // Gérer les cas d'erreur ici, si nécessaire
            console.error('Erreur lors du traitement du formulaire.');
        }
    })
    .catch(function(error) {
        console.error('Erreur lors du traitement du formulaire :', error);
    });
});
