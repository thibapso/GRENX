const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const addIcon = card.querySelector(".add-icon.default");
  const subtractIcon = card.querySelector(".add-icon.additional");
  const defaultContent = card.querySelector(".default-content");
  const additionalContent = card.querySelector(".additional-content");

  card.addEventListener("click", () => {
    // Alterna a classe active
    card.classList.toggle("active");

    // Alterna a visibilidade dos ícones
    addIcon.classList.toggle("default");
    subtractIcon.classList.toggle("additional");

    // Alterna o conteúdo
    defaultContent.classList.toggle("default-content");
    additionalContent.classList.toggle("additional-content");
  });
});
