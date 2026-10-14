// Portfolio projects data
const projects = [
  {
    title: "Mergington Activity Hub",
    description:
      "FastAPI app for school extracurricular sign-ups with Copilot-assisted frontend.",
    tags: "Python, FastAPI, JavaScript",
  },
  {
    title: "Repo Health Dashboard",
    description:
      "Branch protection, templates, and Dependabot setup for healthier repos.",
    tags: "GitHub, DevOps",
  },
  {
    title: "Portfolio Template",
    description:
      "This responsive portfolio site — scaffolded with GitHub Copilot.",
    tags: "HTML, CSS, JavaScript",
  },
];

// Render project cards
function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";
  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <span class="tags">${p.tags}</span>
    `;
    grid.appendChild(card);
  });
}

// Smooth scroll for CTA button
function setupCta() {
  const btn = document.getElementById("cta-btn");
  btn.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
}

// Fake contact form handler (demo only)
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    status.textContent = `Thanks, ${name}! Your message was received (demo).`;
    status.classList.remove("hidden");
    form.reset();
    setTimeout(() => status.classList.add("hidden"), 4000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupCta();
  setupContactForm();
});
