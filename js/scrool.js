// ZOOM TITLE SECTION
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.section');
  var windowHeight = window.innerHeight;

  sections.forEach(function(section) {
    var rect = section.getBoundingClientRect();
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var sectionTop = rect.top + scrollPosition;
    var sectionBottom = sectionTop + rect.height;
    var title = section.querySelector('h2');

    // Calculer le pourcentage de défilement dans la section en ajustant le point de départ et d'arrivée
    var startScroll = sectionTop - windowHeight + windowHeight * 0.7;
    var endScroll = sectionBottom - windowHeight * 0.4;
    var scrollPercentage = (scrollPosition - startScroll) / (endScroll - startScroll);

    // Limiter le pourcentage de défilement entre 0 et 1
    scrollPercentage = Math.max(0, Math.min(scrollPercentage, 0.8));
    var scale = 1 + scrollPercentage * 4;

    // Appliquer la transformation
    title.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  });
});

