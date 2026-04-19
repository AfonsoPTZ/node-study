async function carregarAliens() {
    try {
        // Busca todos os aliens
        const resposta = await fetch('http://localhost:3000/aliens');
        
        if (!resposta.ok) {
            alert('Erro ao carregar aliens.');
            return;
        }

        const aliens = await resposta.json();

        // Se vazio, mostra mensagem
        if (!aliens || aliens.length === 0) {
            const lista = document.getElementById('aliens-list');
            if (lista) {
                lista.innerHTML = '<p style="text-align: center; color: #aaa;">Nenhum alien encontrado</p>';
            }
            return;
        }

        // Renderiza lista de aliens
        renderizarAliens(aliens);

    } catch (error) {
        console.error('Erro ao carregar aliens:', error);
        alert('Erro de conexão com o servidor.');
    }
}

function renderizarAliens(aliens) {
    const lista = document.getElementById('aliens-list');
    if (!lista) return;

    lista.innerHTML = aliens.map(alien => `
        <div class="alien-item">
            <div class="alien-info">
                <div class="alien-name">${alien.name}</div>
                <div class="alien-details">
                    Habilidade: ${alien.special_ability} | 
                    Força: ${alien.strength} | 
                    Velocidade: ${alien.speed}
                </div>
            </div>
            <div class="alien-actions">
                <button onclick="editarAlien(${alien.id})" class="btn-edit">Editar</button>
                <button onclick="deletarAlien(${alien.id})" class="btn-delete">Deletar</button>
            </div>
        </div>
    `).join('');
}

// Carrega aliens ao abrir a página
document.addEventListener('DOMContentLoaded', function() {
    carregarAliens();
});