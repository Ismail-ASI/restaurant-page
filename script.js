document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', function() {
  if (window.scrollY > 60) {
    document.getElementById('header').classList.add('scrolled');
  } else {
    document.getElementById('header').classList.remove('scrolled');
  }
});

var navToggle = document.getElementById('nav-toggle');
var navbar = document.getElementById('navbar');

navToggle.addEventListener('click', function() {
  navbar.classList.toggle('open');
  navToggle.classList.toggle('open');
});

var filterBtns = document.querySelectorAll('.filter-btn');
var allProducts = document.querySelectorAll('.boxproduct');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var filter = btn.dataset.filter;

    allProducts.forEach(function(card) {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
});

var form = document.getElementById('reservation-form');
var feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var firstname = form.querySelector('[name="firstname"]').value.trim();
  var lastname = form.querySelector('[name="lastname"]').value.trim();
  var email = form.querySelector('[name="email"]').value.trim();
  var date = form.querySelector('[name="date"]').value;
  var time = form.querySelector('[name="time"]').value;
  var guests = form.querySelector('[name="guests"]').value;

  form.querySelectorAll('.field-error').forEach(function(s) { s.textContent = ''; });
  form.querySelectorAll('.invalid').forEach(function(i) { i.classList.remove('invalid'); });

  var isValid = true;

  if (!firstname) {
    form.querySelector('[data-field="firstname"]').textContent = 'Le prénom est obligatoire.';
    form.querySelector('[name="firstname"]').classList.add('invalid');
    isValid = false;
  }

  if (!lastname) {
    form.querySelector('[data-field="lastname"]').textContent = 'Le nom est obligatoire.';
    form.querySelector('[name="lastname"]').classList.add('invalid');
    isValid = false;
  }

  if (!email) {
    form.querySelector('[data-field="email"]').textContent = "L'email est obligatoire.";
    form.querySelector('[name="email"]').classList.add('invalid');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    form.querySelector('[data-field="email"]').textContent = 'Email invalide.';
    form.querySelector('[name="email"]').classList.add('invalid');
    isValid = false;
  }

  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var dd = String(today.getDate()).padStart(2, '0');
  var todayStr = yyyy + '-' + mm + '-' + dd;

  if (!date) {
    form.querySelector('[data-field="date"]').textContent = 'La date est obligatoire.';
    form.querySelector('[name="date"]').classList.add('invalid');
    isValid = false;
  } else if (date < todayStr) {
    form.querySelector('[data-field="date"]').textContent = 'La date ne peut pas être dans le passé.';
    form.querySelector('[name="date"]').classList.add('invalid');
    isValid = false;
  }

  if (!time) {
    form.querySelector('[data-field="time"]').textContent = "L'heure est obligatoire.";
    form.querySelector('[name="time"]').classList.add('invalid');
    isValid = false;
  }

  if (!guests || Number(guests) < 1) {
    form.querySelector('[data-field="guests"]').textContent = 'Nombre de personnes obligatoire.';
    form.querySelector('[name="guests"]').classList.add('invalid');
    isValid = false;
  }

  if (!isValid) return;

  feedback.textContent = 'Réservation envoyée avec succès !';
  feedback.className = 'success';
  feedback.hidden = false;
  form.reset();
});