// Scroll To Section

function scrollToSection(elementId, duration = 1500) {
    const element = document.getElementById(elementId);
  
    if (element) {
      const startingPosition = window.pageYOffset;
      const targetPosition = element.offsetTop - 22; 
      const distance = targetPosition - startingPosition;
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;   
  
  
        const progress = currentTime - startTime;   
  
  
        const easeInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - 8 * (x - 1) * (x - 1) * (x - 1) * (x - 1);
        const easedProgress = easeInOutQuart(progress / duration);
        window.scrollTo(0, startingPosition + distance * easedProgress);
  
        if (progress < duration) {
          requestAnimationFrame(animation);
        }
      }
  
      requestAnimationFrame(animation);
    }
  }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ONCLICK

function abrirLink() {
  // Pegar o elemento 'a' dentro do botão
  const link = document.getElementsByClassName('botao');

  // Obter o href do link
  const url = "https://wa.me/5581988341121";

  // Redirecionar para a URL em uma nova aba
  window.open(url, '_blank');
}