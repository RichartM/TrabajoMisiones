// feature: formulario absurdo
const formulario = document.querySelector('#formulario');
const nivelCaos = document.querySelector('#caos');
const valorCaos = document.querySelector('#caos-valor');
const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');

if (formulario) {
	nivelCaos.addEventListener('input', () => {
		valorCaos.textContent = nivelCaos.value;
	});

	formulario.addEventListener('submit', (event) => {
		event.preventDefault();

		if (!formulario.checkValidity()) {
			formulario.reportValidity();
			return;
		}

		mensajeConfirmacion.textContent = '¡Misión absurda recibida! Tu solicitud será evaluada por el pato con doctorado.';
		mensajeConfirmacion.classList.remove('d-none');
		formulario.reset();
		valorCaos.textContent = nivelCaos.value;
	});
}
