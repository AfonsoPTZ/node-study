async function deletarAlien(id) {
    // Confirma exclusão
    if (!confirm(`Tem certeza que quer deletar o alien com ID ${id}?`)) {
        return;
    }

    try {
        // Envia para backend
        const resposta = await fetch(`http://localhost:3000/aliensDelete/${id}`, {
            method: 'DELETE'
        });

        const resultado = await resposta.json();

        // Se erro na exclusão, mostra mensagem
        if (!resposta.ok) {
            alert(resultado.error || 'Erro ao deletar alien.');
            return;
        }

        // Sucesso: mostra alerta e recarrega lista
        alert('Alien deletado com sucesso!');
        
        // Carrega lista de aliens
        setTimeout(() => carregarAliens(), 500);

    } catch (error) {
        console.error('Erro ao deletar alien:', error);
        alert('Erro de conexão com o servidor.');
    }
}