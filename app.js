(function Toggle() {
  const toggle_icons = document.querySelectorAll('.toggle');
  for (let i = 0; i < toggle_icons.length; i++) {
    toggle_icons[i].addEventListener('click', () => {
      for (let j = 0; j < toggle_icons.length; j++) {
        toggle_icons[j].classList.remove('active');
      }
      toggle_icons[i].classList.toggle('active');
    });
  }
})();