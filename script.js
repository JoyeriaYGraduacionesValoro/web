const selectBtn = document.getElementById('select-btn');
const list = document.querySelector('.list');
const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

if (selectBtn && list) {
  selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle('active');
    list.classList.toggle('active');
  });
}

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    if (slide.classList.contains('active')) {
      slide.classList.remove('active');
    } else {
      slides.forEach(s => s.classList.remove('active'));
      slide.classList.add('active');
    }
  });
});

function store(value) {
  localStorage.setItem('darkmode', JSON.stringify(value));
}

function load() {
  const darkmode = JSON.parse(localStorage.getItem('darkmode'));

  if (darkmode) {
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.add('fa-sun');
  }
}

load();

if (btn && icon) {
  btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    store(body.classList.contains('darkmode'));

    if (body.classList.contains('darkmode')) {
      icon.classList.replace('fa-sun', 'fa-moon');
    } else {
      icon.classList.replace('fa-moon', 'fa-sun');
    }

    setTimeout(() => {
      icon.classList.remove('animated');
    }, 500);
  });
}
