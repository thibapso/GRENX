// Função para buscar dados da API remota
async function fetchRemoteData() {
    try {
        const url = 'https://dadosabertos.aneel.gov.br/dataset/0ffe45bc-b0bc-4c18-99ab-e97e94841418/resource/cf48169c-bce3-4cbc-b31b-f32b7454d172/download/tarifasocial.json';
        const response = await fetch(url, { mode: 'no-cors' });
        console.warn('Usando no-cors: Resposta opaca. Dados reais podem não estar disponíveis.');
        return []; // Não acessível no no-cors
    } catch (error) {
        console.error('Erro ao buscar dados remotos:', error);
        return null;
    }
}

// Função para buscar dados do arquivo JSON local
async function fetchLocalData() {
    try {
        const response = await fetch('./tarifasocial.json');
        const data = await response.json();
        console.log('Dados carregados do arquivo local.');
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados locais:', error);
        return [];
    }
}

// Função principal para criar o gráfico
async function createBarChart() {
    // Tenta buscar dados remotos
    let data = await fetchRemoteData();
    
    // Caso os dados remotos falhem, usa os dados locais
    if (!data || data.length === 0) {
        data = await fetchLocalData();
    }
    
    // Se ambos falharem, usa um fallback fixo
    if (!data || data.length === 0) {
        console.warn('Nenhum dado disponível. Usando dados fixos como fallback.');
        data = [
            { nomRegiao: "Norte", anoReferencia: 2012, mesReferencia: 9, qtdUndConsumidorResidencial: 3455680, qtdUndConsumidorBaixaRenda: 466233 },
            { nomRegiao: "Nordeste", anoReferencia: 2012, mesReferencia: 9, qtdUndConsumidorResidencial: 16113317, qtdUndConsumidorBaixaRenda: 6918922 },
            { nomRegiao: "Sul", anoReferencia: 2012, mesReferencia: 9, qtdUndConsumidorResidencial: 4381589, qtdUndConsumidorBaixaRenda: 384272 },
            { nomRegiao: "Sudeste", anoReferencia: 2012, mesReferencia: 9, qtdUndConsumidorResidencial: 28008009, qtdUndConsumidorBaixaRenda: 2320287 },
            { nomRegiao: "Centro-Oeste", anoReferencia: 2012, mesReferencia: 9, qtdUndConsumidorResidencial: 8791661, qtdUndConsumidorBaixaRenda: 764752 }
        ];
    }
    
    const labels = data.map(item => item.nomRegiao);
    const consumidoresResidenciais = data.map(item => item.qtdUndConsumidorResidencial);
    const consumidoresBaixaRenda = data.map(item => item.qtdUndConsumidorBaixaRenda);
    
    const ctx = document.getElementById('barChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Consumidores Residenciais',
                    data: consumidoresResidenciais,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Consumidores Baixa Renda',
                    data: consumidoresBaixaRenda,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Regiões'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Quantidade de Consumidores'
                    }
                }
            }
        }
    });
}

createBarChart();
