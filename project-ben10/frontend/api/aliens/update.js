async function atualizarAlien() {
    // Coleta valores do formulário
    const id = document.getElementById('alien-id-update').value.trim();
    const name = document.getElementById('alien-name-update').value.trim();
    const special_ability = document.getElementById('alien-ability-update').value.trim();
    const strength = document.getElementById('alien-strength-update').value.trim();
    const speed = document.getElementById('alien-speed-update').value.trim();

    // Valida ID obrigatório
    if (!id) {
        alert('Informe o ID do alien.');
        return;
    }

    // Prepara dados para envio (apenas campos preenchidos)
    const dados = {};
    if (name) dados.name = name;
    if (special_ability) dados.special_ability = special_ability;
    if (strength) dados.strength = Number(strength);
    if (speed) dados.speed = Number(speed);

    // Se nenhum campo preenchido
    if (Object.keys(dados).length === 0) {
        alert('Preencha pelo menos um campo para atualizar.');
        return;
    }

    try {
        // Envia para backend
        const resposta = await fetch(`http://localhost:3000/aliensUpdate/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        // Se erro na atualização, mostra mensagem
        if (!resposta.ok) {
            alert(resultado.message || 'Erro ao atualizar alien.');
            return;
        }

        // Sucesso: mostra mensagem do backend
        alert(resultado.message || 'Alien atualizado com sucesso!');
        document.getElementById('form-update')?.reset();
        
        // Carrega lista de aliens
        setTimeout(() => carregarAliens(), 500);

    } catch (error) {
        alert('Erro de conexão com o servidor.');
    }
}

function editarAlien(id) {
    document.getElementById('alien-id-update').value = id;
    document.getElementById('form-update')?.scrollIntoView({ behavior: 'smooth' });
}

// Listener do formulário
document.getElementById('form-update')?.addEventListener('submit', function(e) {
    e.preventDefault();
    atualizarAlien();
});