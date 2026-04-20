async function criarAlien() {
    // Coleta valores do formulário
    const name = document.getElementById('alien-name').value.trim();
    const special_ability = document.getElementById('alien-ability').value.trim();
    const strength = document.getElementById('alien-strength').value.trim();
    const speed = document.getElementById('alien-speed').value.trim();

    // Valida campos vazios
    if (!name || !special_ability || !strength || !speed) {
        alert('Preencha todos os campos antes de enviar.');
        return;
    }

    // Prepara dados para envio
    const dados = {
        name,
        special_ability,
        strength: Number(strength),
        speed: Number(speed)
    };

    try {
        // Envia para backend
        const resposta = await fetch('http://localhost:3000/aliensCreate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        // Se erro no cadastro, mostra mensagem
        if (!resposta.ok) {
            alert(resultado.message || 'Erro ao criar alien.');
            return;
        }

        // Sucesso: mostra mensagem do backend
        alert(resultado.message || 'Alien criado com sucesso!');
        document.getElementById('form-create')?.reset();
        
        // Carrega lista de aliens
        setTimeout(() => carregarAliens(), 500);

    } catch (error) {
        alert('Erro de conexão com o servidor.');
    }
}

// Listener do formulário
document.getElementById('form-create')?.addEventListener('submit', function(e) {
    e.preventDefault();
    criarAlien();
});
