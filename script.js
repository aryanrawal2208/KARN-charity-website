
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}


const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}



const donationForm = document.querySelector('.form-card form');

if (donationForm) {
  donationForm.addEventListener('submit', (e) => {
    e.preventDefault();

   
    if (!donationForm.checkValidity()) {
      donationForm.reportValidity();
      return;
    }

    showSuccessMessage(donationForm);
    donationForm.reset();
  });
}

function showSuccessMessage(form) {
  const existing = document.querySelector('.success-message');
  if (existing) {
    existing.remove();
  }

  const message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = 'Thank you! Your donation form has been submitted successfully.';

  form.parentNode.insertBefore(message, form);
  message.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
