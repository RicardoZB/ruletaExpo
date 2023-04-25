const ruleta = document.getElementById('ruleta');
let premios = ['Premio 1', 'No premio', 'Premio 2', 'Premio 3', 'Premio 4', 'Premio 5'];

let rotacion = 0;
let contadorGiros = 0;

function inicializarRuleta() {
    // Eliminar elementos existentes en la ruleta
    while (ruleta.firstChild) {
      ruleta.removeChild(ruleta.firstChild);
    }
  
    // Agregar nuevos segmentos
    premios.forEach((premio, index) => {
      let segmento = document.createElement('div');
      segmento.classList.add('segmento');
      segmento.style.transform = `rotate(${index * (360 / premios.length)}deg) translateY(-50%)`;
      segmento.style.transformOrigin = '100% 50%';
      segmento.textContent = premio;
      ruleta.appendChild(segmento);
    });
  }
  

function girarRuleta() {
  contadorGiros++;

  if (contadorGiros % 3 === 0) {
    // Aumenta la probabilidad de "No premio" después de cada 3 giros
    premios = ['Premio 1', 'Premio 2', 'Premio 4', 'Premio 3', 'No premio'];
    inicializarRuleta();
  }

  let vueltas = Math.floor(Math.random() * 6) + 10; // Entre 10 y 15 vueltas
  let angulo = Math.floor(Math.random() * 360);
  rotacion = (vueltas * 360) + angulo;
  ruleta.style.transform = `rotate(-${rotacion}deg)`;
}

inicializarRuleta();

// Asigna el controlador del evento click al botón "Girar"
document.querySelector('.boton-girar').addEventListener('click', girarRuleta);
