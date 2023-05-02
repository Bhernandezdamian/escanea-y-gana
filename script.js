let count = parseInt(localStorage.getItem('count')) || 0;
const iframe = document.getElementById('google-iframe');

iframe.addEventListener('load', function() {
  count++;
  localStorage.setItem('count', count);

  if (count >= 5) {
    console.log('Redireccionando...');
    window.location.href = 'https://www.facebook.com/';
  }
});
