// Função para validar o email
function validarEmail() {
     // Captura o valor do input
     const email = document.querySelector(".newsletter-input").value;
   
     // Expressão regular para validar um email básico
     const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
     // Verifica se o email corresponde ao padrão
     if (regexEmail.test(email)) {
       alert("Email cadastrado!");
     } else {
       alert("Informe um email válido.");
     }
   }
   
   // Ouvinte para o botão de inscrição
   document.querySelector(".newsletter-btn").addEventListener("click", validarEmail);
   
   // Ouvinte para pressionar Enter no input
   document.querySelector(".newsletter-input").addEventListener("keypress", function (event) {
     if (event.key === "Enter") {
       validarEmail();
     }
   });
   