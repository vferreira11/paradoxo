const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const demoForm = document.querySelector('[data-demo-form]');
const formMessage = document.querySelector('[data-form-message]');

if (demoForm && formMessage) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(demoForm);
    const name = data.get('nome') || 'Voce';

    formMessage.textContent = `${name}, esta V1 ja mostra a experiencia da aplicacao. Na implementacao real, o proximo passo e conectar esse formulario ao Tally, ao CRM e ao fluxo de discovery.`;
    demoForm.reset();
  });
}