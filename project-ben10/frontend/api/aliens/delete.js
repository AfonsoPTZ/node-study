async function deletarAlien(id) {
    // Confirma exclusão
    if (!confirm(`Tem certeza que quer deletar o alien com ID ${id}?`)) {
        return;
    }

    try {
        // Envia para backend
        const resposta = await fetch(`http://127.0.0.1:3000/aliensDelete/${id}`, {
            method: 'DELETE'
        });

        const resultado = await resposta.json();

        // Se erro na exclusão, mostra mensagem
        if (!resposta.ok) {
            alert(resultado.message || 'Erro ao deletar alien.');
            return;
        }

            
        // Sucesso: mostra mensagem do backend
        alert(resultado.message || 'Alien deletado com sucesso!');
        
        // Carrega lista de aliens
        setTimeout(() => carregarAliens(), 500);

    } catch (error) {
        alert('Erro de conexão com o servidor.');
    }
}