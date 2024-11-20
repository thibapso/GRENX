document.addEventListener('DOMContentLoaded', function() {
  // Captura os elementos do dropdown
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  // Alternar a visibilidade do menu ao clicar no link
  dropdown.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    dropdown.classList.toggle('active');
  });

  // Fechar o dropdown ao clicar fora
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });
});
