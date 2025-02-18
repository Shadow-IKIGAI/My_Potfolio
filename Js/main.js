
(function ($) {
  "use strict";
// Typing text animation
document.addEventListener('DOMContentLoaded', () => {
  const typedTextElement = document.querySelector('.hero-section .hero-text .typed-text');
  const targetElement = document.querySelector('.hero-section .hero-text h2');

  if (typedTextElement && targetElement) {
      // Ensure the <h3> is empty before starting
      targetElement.textContent = '';

      const typedStrings = typedTextElement.textContent;
      new Typed('.hero-section .hero-text h2', {
          strings: typedStrings.split(','), // Split the strings from `typed-text`
          typeSpeed: 100,                  // Typing speed
          backSpeed: 50,                   // Backspace speed
          smartBackspace: false,           // Avoid matching substrings
          loop: true,                      // Loop the typing animation
      });
  }
});

// Toggle dropdown menu
document.querySelector('.toggle-btn').addEventListener('click', function () {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const icon = this.querySelector('i');

  dropdownMenu.classList.toggle('show');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times'); // FontAwesome class for 'X' mark
});

// Change navbar color on scroll
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.total-nav-bar');
  navbar.classList.toggle('nav-scrolled', window.scrollY > 50);
});

// Smooth scrolling on the navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Toggle Menu
document.getElementById('menuToggle').addEventListener('click', function () {
  document.querySelector('.dropdown-menu').classList.toggle('active');
});

  document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS.js once DOM is ready with the 'once' option set to true
    AOS.init({
      once: true,
    });
  });
//Skill Js
  $(document).ready(function () {
    $(".skills").waypoint(
      function () {
        $(".progress-bar").each(function () {
          const value = $(this).attr("aria-valuenow");
          $(this).css("width", value + "%");
        });
      },
      { offset: "80%" }
    );
  });
//project js
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".project-btn-all li");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("filter-active"));

      // Add active class to the clicked button
      button.classList.add("filter-active");

      // Show/Hide portfolio items based on the filter
      projectItems.forEach((item) => {
        if (filter === "*" || item.classList.contains(filter.slice(1))) {
          item.style.display = "flex"; // Show matching items
        } else {
          item.style.display = "none"; // Hide non-matching items
        }
      });
    });
  });
});

//education js
  AOS.init();

  // Initialize WOW.js
  new WOW().init();

  //loader
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    preloader.classList.add("hidden"); // Smooth fade out

    setTimeout(() => {
      preloader.style.display = "none"; // Fully remove after fade-out
    }, 500);
  }, 3000); // 2 seconds delay


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });

  // Learn More about content
  document.getElementById("learnMoreBtn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page refresh
    let extraContent = document.querySelector(".about-extra-content");

    if (extraContent.classList.contains("show")) {
      extraContent.classList.remove("show");
      this.textContent = "Learn More"; // Change button text back
    } else {
      extraContent.classList.add("show");
      this.textContent = "Show Less"; // Change button text
    }
  });

 //Email with Emailjs
 document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  emailjs.init("4IWosxwGjCyzcXY_l"); // Replace with your EmailJS Public Key

  let serviceID = "service_ytm7ngj"; // Replace with your EmailJS Service ID
  let templateID = "template_c45i54v"; // Replace with your EmailJS Template ID

  let formData = {
    to_name: "VN HaularesTech Muralidharan M",  // Your company or website name (recipient)
    from_name: document.getElementById("name").value, // The name entered by the user
    email: document.getElementById("email").value, // The email entered by the user
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  

  let sendButton = document.getElementById("sendMessageButton");

  sendButton.innerHTML = "Sending...";
  sendButton.disabled = true; // Disable button while sending

  emailjs.send(serviceID, templateID, formData)
    .then(response => {
      alert("Message sent successfully!");
      sendButton.innerHTML = "Send Message";
      sendButton.disabled = false; // Re-enable button
      document.getElementById("contactForm").reset(); // Clear form after sending
    })
    .catch(error => {
      alert("Error sending message: " + error);
      sendButton.innerHTML = "Send Message";
      sendButton.disabled = false; // Re-enable button
    });
});

})(jQuery);
  
