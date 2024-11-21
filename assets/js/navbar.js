document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Alternar visibilidade do menu ao clicar no hambúrguer
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("open");

    // Alternar o ícone do hambúrguer
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("ri-menu-line");
    icon.classList.toggle("ri-close-line");
  });

  // Fechar o menu ao clicar fora
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove("active");
      hamburger.classList.remove("open");

      // Restaurar o ícone do hambúrguer
      const icon = hamburger.querySelector("i");
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    }
  });

  // Lógica para o dropdown
  const dropdown = document.querySelector(".dropdown");
  dropdown
    .querySelector(".dropdown-toggle")
    .addEventListener("click", (event) => {
      event.preventDefault(); // Impede o comportamento padrão do link
      dropdown.classList.toggle("active");
    });

  // Fechar o dropdown ao clicar fora
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});
