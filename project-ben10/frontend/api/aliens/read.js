async function carregarAliens() {
    try {
        // Busca todos os aliens
        const resposta = await fetch('http://127.0.0.1:3000/aliens');
        
        // Se 204 (sem aliens), não tenta fazer .json()
        if (resposta.status === 204) {
            alert('Nenhum alien encontrado');
            return;
        }

        const resultado = await resposta.json();

        // Se erro (400, 404, etc), mostra mensagem do backend
        if (!resposta.ok) {
            alert(resultado.message || 'Erro ao carregar aliens.');
            return;
        }

        const aliens = resultado.data;

        // Renderiza lista de aliens
        renderizarAliens(aliens);

    } catch (error) {
        alert('Erro de conexão com o servidor.');
    }
}

// Carrega aliens ao abrir a página
document.addEventListener('DOMContentLoaded', carregarAliens);

function renderizarAliens(aliens) {
    const lista = document.getElementById('aliens-list');

    lista.innerHTML = aliens.map(alien => `
        <div class="col-md-4">
            <div class="card h-100">
                <div class="card-header">
                    <h5 class="card-title mb-0">${alien.name}</h5>
                </div>
                <div class="card-body">
                    <p class="mb-2"><strong>Habilidade:</strong> ${alien.special_ability}</p>
                    <p class="mb-2"><strong>Força:</strong> ${alien.strength}</p>
                    <p class="mb-3"><strong>Velocidade:</strong> ${alien.speed}</p>
                    <div class="d-grid gap-2 d-flex">
                        <button class="btn btn-primary btn-sm" onclick="editarAlien(${alien.id})">✏️ Editar</button>
                        <button class="btn btn-primary btn-sm" onclick="deletarAlien(${alien.id})">🗑️ Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}