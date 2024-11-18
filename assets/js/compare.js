document.getElementById("comparar").addEventListener("click", function () {
  // Captura os valores dos inputs
  let consumo = document.getElementById("consumo").value.replace(",", ".");
  let precoAtual = document
    .getElementById("precoAtual")
    .value.replace(",", ".");

  // Converte os valores para float
  consumo = parseFloat(consumo);
  precoAtual = parseFloat(precoAtual);

  const precoPorKWhNovaEmpresa = 0.8; // Exemplo: R$0,80 por kWh

  if (isNaN(consumo) || isNaN(precoAtual)) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  // Calcula os custos
  const custoAtual = precoAtual;
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
