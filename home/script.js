document.getElementById('animate-logo').addEventListener('click', function () {
  const logo = document.getElementById('logo');
  logo.style.transform = 'translateX(50px)';
  logo.style.transition = 'transform 0.5s ease';
});
