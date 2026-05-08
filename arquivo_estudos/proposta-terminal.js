const proposalNavToggle = document.querySelector('.nav-toggle');
const proposalNav = document.querySelector('.site-nav');

if (proposalNavToggle && proposalNav) {
  proposalNavToggle.addEventListener('click', () => {
    const isOpen = proposalNav.classList.toggle('is-open');
    proposalNavToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const proposalRevealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const proposalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          proposalObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  proposalRevealItems.forEach((item) => proposalObserver.observe(item));
} else {
  proposalRevealItems.forEach((item) => item.classList.add('is-visible'));
}

const proposalForm = document.querySelector('[data-proposal-form]');
const proposalMessage = document.querySelector('[data-proposal-message]');

if (proposalForm && proposalMessage) {
  proposalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(proposalForm);
    const name = data.get('nome') || 'lead';
    proposalMessage.textContent = `dispatch complete :: ${name}. O objetivo desta tela e provar a linguagem visual. Na implementacao real, eu conectaria isso ao Tally, CRM e rotina de qualificacao.`;
    proposalForm.reset();
  });
}