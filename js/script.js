// FLOU NAVIGATION 

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Ajoute la classe 'flou' aux autres éléments avec un délai pour l'animation
    navItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.add('flou');
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    // Retire la classe 'flou' des autres éléments avec un délai pour l'animation
    navItems.forEach(otherItem => {
      if (otherItem !== item) {
        setTimeout(() => {
          otherItem.classList.remove('flou');
        }, 200);
      }
    });
  });
});
