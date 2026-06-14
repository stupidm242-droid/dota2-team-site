// Параллакс эффект хедера
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const headerImg = document.querySelector('#main-header img');
  headerImg.style.transform = `translateY(${scrollY * 0.04}px)`; 
});

console.log("Сайт загружен! Параллакс и плавающие элементы работают.");


