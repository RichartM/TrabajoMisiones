// feature: boton-del-caos
document.addEventListener('DOMContentLoaded', () => {
  const btnCaos = document.getElementById('btn-caos');

  const colores = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
  const mensajes = [
    '¡Cuidado! Acabas de despertar al caos.',
    'Nada volverá a ser lo mismo.',
    'El botón te está observando.',
    '¿Seguro que querías hacer eso?'
  ];
  const textosBoton = [
    'Presióname si te atreves',
    'No lo vuelvas a hacer',
    '¡Ya fue suficiente!',
    'El caos continúa...'
  ];

  function cambiarColorFondo() {
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
  }

  function mostrarAlertaAleatoria() {
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    alert(mensaje);
  }

  function animarBoton() {
    btnCaos.classList.remove('caos-animacion');
    void btnCaos.offsetWidth;
    btnCaos.classList.add('caos-animacion');
  }

  function cambiarTextoBoton() {
    const texto = textosBoton[Math.floor(Math.random() * textosBoton.length)];
    btnCaos.textContent = texto;
  }

  const accionesCaos = [cambiarColorFondo, mostrarAlertaAleatoria, animarBoton, cambiarTextoBoton];

  btnCaos.addEventListener('click', () => {
    const accion = accionesCaos[Math.floor(Math.random() * accionesCaos.length)];
    accion();
  });
});
