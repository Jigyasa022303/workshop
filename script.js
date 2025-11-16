// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Handler
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill all fields!";
    formMessage.style.color = "#ff6b6b";
    return;
  }

  // Simulate form submission
  formMessage.textContent = "Thank you! Your message has been sent successfully.";
  formMessage.style.color = "#64ffda";
  form.reset();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
});
