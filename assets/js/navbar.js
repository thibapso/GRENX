document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const body = document.body;
  const overlay = document.createElement("div"); // Criando o elemento de sobreposição
  overlay.classList.add("overlay"); // Adiciona a classe para o estilo
  body.appendChild(overlay); // Adiciona a sobreposição ao body

  // Função para fechar o dropdown
  const closeDropdown = () => {
    dropdown.classList.remove("active");
    overlay.style.display = "none"; // Esconde a sobreposição
  };

  // Função para abrir o dropdown
  const openDropdown = () => {
    dropdown.classList.add("active");
    overlay.style.display = "block"; // Exibe a sobreposição
  };

  // Clique no dropdown (abre/fecha)
  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    if (!dropdown.classList.contains("active")) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });

  // Fechar o dropdown se clicar fora dele
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !overlay.contains(e.target)) {
      closeDropdown();
    }
  });

  // Clique na sobreposição para fechar
  overlay.addEventListener("click", () => {
    closeDropdown();
  });
});
