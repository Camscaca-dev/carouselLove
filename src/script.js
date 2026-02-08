const slides = document.querySelectorAll('.slider');
const text = document.querySelector('.slider-text');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('on'));
  slides[index].classList.add('on');

  // pega o data-text da imagem ativa
  text.textContent = slides[index].dataset.text;
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// inicia com a primeira imagem
showSlide(currentSlide);

text.classList.remove('show');
setTimeout(() => text.classList.add('show'), 50);