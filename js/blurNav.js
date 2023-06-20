const navItems = document.querySelectorAll('.nav-item');
let timeoutId;

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    navItems.forEach(otherItem => {
      otherItem.classList.remove('flou');
    });
    navItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.add('flou');
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      navItems.forEach(otherItem => {
        otherItem.classList.remove('flou');
      });
    }, 200);
  });
});

