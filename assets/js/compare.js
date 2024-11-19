document.getElementById("comparar").addEventListener("click", function () {
  // Captura o valor do input e ajusta o formato
  let consumo = document.getElementById("consumo").value
    .replace(/\./g, "") // Remove separadores de milhar
    .replace(",", "."); // Substitui vírgula por ponto (para decimais)

  // Converte o valor de consumo para float e divide por 1.000
  consumo = parseFloat(consumo) / 1000;

  // Preços atualizados por kWh
  const precoPorKWhAntigaEmpresa = 0.44950;
  const precoPorKWhNovaEmpresa = 0.40950;

  if (isNaN(consumo)) {
    alert("Por favor, insira um valor de consumo válido.");
    return;
  }

  // Calcula os custos
  const custoAtual = consumo * precoPorKWhAntigaEmpresa;
  const custoNova = consumo * precoPorKWhNovaEmpresa;

  // Calcula a economia
  const economia = custoAtual - custoNova;

  // Atualiza os valores na página
  document.getElementById("preco-atual").textContent = `R$${custoAtual
    .toFixed(2)
    .replace(".", ",")}`;
  document.getElementById("preco-nova").textContent = `R$${custoNova
    .toFixed(2)
    .replace(".", ",")}`;
  document.getElementById("economia").textContent = `Economizou: R$${economia
    .toFixed(2)
    .replace(".", ",")}`;
});

// Ouvinte para pressionar Enter
document
  .getElementById("consumo")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Chama a função de cálculo quando Enter é pressionado
      document.getElementById("comparar").click();
    }
  });

// Ouvinte para restaurar valores iniciais ao apagar
document.getElementById("consumo").addEventListener("input", function () {
  let input = this.value;

  // Se o campo estiver vazio, restaura os valores padrões do HTML
  if (!input) {
    document.getElementById("preco-atual").textContent = "R$67,42";
    document.getElementById("preco-nova").textContent = "R$61,42";
    document.getElementById("economia").textContent = "Economizou: R$6,00";
  }
});
