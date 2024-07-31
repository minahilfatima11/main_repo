document.addEventListener('DOMContentLoaded', function() {

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const target = document.querySelector(this.getAttribute('href'));
          
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
              animateSection(target.id); 
          }
      });
  });

 
  const sections = ['home', 'about', 'services', 'projects', 'contact'];
  const sectionObservers = {};

  sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);

      if (section) {
          sectionObservers[sectionId] = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      document.querySelector(`a[href="#${sectionId}"]`).classList.add('active'); // Add active class to corresponding nav link
                      animateText(section); // Call function to animate text when section is in view
                  } else {
                      document.querySelector(`a[href="#${sectionId}"]`).classList.remove('active'); // Remove active class if not in view
                  }
              });
          }, { threshold: 0.5 }); // adjust threshold as per your need

          sectionObservers[sectionId].observe(section);
      }
  });

  // Function to animate text
  function animateText(section) {
      const textElements = section.querySelectorAll('.animate-text'); // Adjust class name as needed

      textElements.forEach(element => {
          element.classList.add('animate'); // Add CSS class for text animation
      });
  }

  // Function to animate entire section
  function animateSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
          section.classList.add('section-animate'); // Add CSS class for section animation

          // Remove the animation class after it has been applied to allow for repeated animations
          setTimeout(() => {
              section.classList.remove('section-animate');
          }, 1000); // Adjust timing as necessary
      }
  }

});
