
// Feature: misión secreta
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert('🕵️ ¡Misión Secreta completada! Has activado el Código Konami.');
            document.body.style.transition = "all 1s";
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#0f0";
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
