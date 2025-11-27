// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------- CONTACT FORM ---------------- */
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "❌ Please fill all fields!";
        formMessage.style.color = "red";
        return;
    }

    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    formMessage.textContent = "✔ Message Submitted! Redirecting...";
    formMessage.style.color = "lightgreen";

    setTimeout(() => {
        window.location.href = "form-details.html";
    }, 1000);
});

/* ---------------- PROJECT CLICK HANDLER ---------------- */
document.querySelectorAll(".project").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) window.location.href = link;
    });
});

/* ---------------- DARK / LIGHT MODE ---------------- */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

/* ---------------- CANVAS DRAWING ---------------- */
window.onload = function () {
    const canvas = document.getElementById("myCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#d7f5dd";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = "imagee.jpg";

    img.onload = function () {
        ctx.drawImage(img, 70, 20, 150, 150);

        ctx.font = "20px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText("Hello Jigyasa!", 80, 190);
    };
};

/* ---------------- BACK TO TOP BUTTON ---------------- */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ---------------- PROJECT GRID CLICK ---------------- */
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) window.location.href = link;
    });
});


/* ---------------- IMAGE SLIDER ---------------- */
let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
    changeSlide(index + 1);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    changeSlide(index - 1);
});

function changeSlide(newIndex) {
    slides[index].classList.remove("active");

    index = (newIndex + slides.length) % slides.length;

    slides[index].classList.add("active");
}

// Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(index + 1);
}, 5000);
