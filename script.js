function updateSlider(slider) {
  const value = slider.value;
  const min = slider.min || 0;
  const max = slider.max || 100;
  
  // Calcula a porcentagem do preenchimento
  const percentage = ((value - min) / (max - min)) * 100;

  // Atualiza a cor da barra (preenchido em branco puro, restante escuro)
  slider.style.background = `linear-gradient(to right, #ffffff ${percentage}%, #232736 ${percentage}%)`;

  // Atualiza o texto do valor (se houver o elemento)
  const valueDisplay = document.getElementById('slider-value');
  if (valueDisplay) {
    valueDisplay.textContent = `${value}%`;
  }
}

// Inicializa a cor dos sliders ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.custom-slider');
  sliders.forEach(slider => updateSlider(slider));
});
