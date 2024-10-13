document.addEventListener('DOMContentLoaded', function() {
  smoothScrolling();
  buttonMobileClick();
  buttonAccordionClick();
});

function smoothScrolling() {
  // Select all links with the class 'js-smooth-scroll'
  const links = document.querySelectorAll('.js-smooth-scroll');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the target section ID from the link's href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      if (targetSection) {
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 50;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}

function buttonMobileClick() {
  const button = document.querySelector('.js-mobile-button');
  const links = document.querySelectorAll('.ms-h-nav__menu-link');
  const menu = document.querySelector('.ms-h-nav__menu');

  button.addEventListener('click', function() {
    // Get the data-target attribute value
    const targetId = this.getAttribute('data-target');
    // Get the target section
    const targetSection = document.getElementById(targetId);

    if (targetSection.classList.contains('active')) {
      targetSection.classList.remove('active');
      this.classList.remove('active');
      return;
    }

    targetSection.classList.add('active');
    this.classList.add('active');
  });

  // Add event listener to each link to close the menu when clicked
  links.forEach(link => {
    link.addEventListener('click', function() {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.classList.remove('active');
      }
      button.classList.remove('active');
    });
  });

  // Add event listener to the document to handle clicks outside
  document.addEventListener('click', function(event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.classList.remove('active');
      }
      button.classList.remove('active');
    }
  });
}

function buttonAccordionClick() {
  const accordionButtons = document.querySelectorAll('.js-accordion-button');

  accordionButtons.forEach(accordButton => {
    accordButton.addEventListener('click', function() {
      // Get the data-target attribute value
      const targetId = this.getAttribute('data-target');
      // Get the target section
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Toggle the 'active' class on the target section
        targetSection.classList.toggle('active');
        // Toggle the 'active' class on the clicked button
        this.classList.toggle('active');
      }
    });
  });
}