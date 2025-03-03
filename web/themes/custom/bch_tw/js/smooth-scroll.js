
  document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('nav a');
    const sections = [];

    tocLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        sections.push(targetElement);
      }

      // Smooth scrolling implementation
      link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove '.active' from all links
        tocLinks.forEach(link => link.classList.remove('active'));

        // Add '.active' to the clicked link
        this.classList.add('active');

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        
        if (entry.isIntersecting) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  });

