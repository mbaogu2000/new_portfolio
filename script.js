// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Reveal on scroll animation
  const animatedItems = document.querySelectorAll('.service-card, .work-card, .glass-card');
  
  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
  
    animatedItems.forEach(item => {
      const top = item.getBoundingClientRect().top;
      if (top < trigger) {
        item.classList.add('show');
      }
    });
  };
  
  animatedItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = '0.6s ease';
  });
  
  window.addEventListener('scroll', reveal);
  reveal();
  