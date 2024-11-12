// Navbar se adaptando ao rolar da pagina.
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Abrir e fechar do menu mobile.
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Interção dos links com a classe 'active-link'
const navLinks = document.querySelectorAll(".navbar-list__link");
const logoLink = document.getElementById("logo-link");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navMenu.classList.remove("show-menu");

    navLinks.forEach((nav) => nav.classList.remove("active-link"));

    link.classList.add("active-link");

    const id = link.getAttribute("href");
    const element = document.querySelector(id);
    const position = element.offsetTop - 62;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});

// Interação do logo com a classe 'active-link'
logoLink.addEventListener("click", (e) => {
  e.preventDefault();

  navLinks.forEach((nav) => nav.classList.remove("active-link"));

  navLinks[0].classList.add("active-link");

  const element = document.querySelector("#hero");
  const position = element.offsetTop - 62;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
});

// Função para atualizar o link ativo com base no scroll
function changeActiveLinkOnScroll() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active-link");
    }
  });
}

// Escuta o evento de scroll para mudar a classe 'active-link'
window.addEventListener("scroll", changeActiveLinkOnScroll);

