const langButton = document.getElementById('lang-button');
let currentLang = 'no';

langButton.addEventListener('click', () => {
  const texts = document.querySelectorAll('.lang-text');
  if (currentLang === 'no') {
    texts.forEach(el => el.textContent = el.dataset.en);
    langButton.textContent = 'EN → NO';
    currentLang = 'en';
  } else {
    texts.forEach(el => el.textContent = el.dataset.no);
    langButton.textContent = 'NO → EN';
    currentLang = 'no';
  }
});
