async function excluiruser(id) {


    if(!confirm("tem certeza q quer deletar o user?")){
        return;
    }



    const resposta = await fetch(`http://localhost:3000/DeleteUser/${id}`, {
        method: "DELETE"
    });

    const resultato = await resposta.json();

    alert(resultato.message)


    setTimeout(() => carregarusers(), 500);

}

