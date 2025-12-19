const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // close menu when clicking a link (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}