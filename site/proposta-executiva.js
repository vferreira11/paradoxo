const executiveNavToggle = document.querySelector('.nav-toggle');
const executiveNav = document.querySelector('.site-nav');

if (executiveNavToggle && executiveNav) {
  executiveNavToggle.addEventListener('click', () => {
    const isOpen = executiveNav.classList.toggle('is-open');
    executiveNavToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const executiveRevealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const executiveObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          executiveObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  executiveRevealItems.forEach((item) => executiveObserver.observe(item));
} else {
  executiveRevealItems.forEach((item) => item.classList.add('is-visible'));
}

const paradoxoForms = document.querySelectorAll('[data-executive-form], [data-paradoxo-form]');

paradoxoForms.forEach((form) => {
  const messageNode = form.querySelector('[data-form-message], [data-executive-message]');

  if (!messageNode) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('nome') || 'Contato';
    const customMessage = form.getAttribute('data-success-message');

    messageNode.textContent = customMessage
      ? customMessage.replace('{name}', String(name))
      : `${name}, esta proposta mostra a direcao visual recomendada para a Paradoxo: elegante, disciplinada e com a IA presente como camada de clareza. Na implementacao real, este formulario seria conectado ao fluxo comercial.`;

    form.reset();
  });
});