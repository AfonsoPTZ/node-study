function preencherid(id)
{

    document.getElementById("usuario-id-edit").value = id;
}

async function editaruser() {
    
    const id = document.getElementById("usuario-id-edit").value
    const name = document.getElementById("usuario-name-edit").value
    const cpf = document.getElementById("usuario-cpf-edit").value
    const telefone = document.getElementById("usuario-telefone-edit").value

    if (!id || !name || !cpf || !telefone ){
        alert("preencha os campos")
        return;
    }

    const dados = {
        name,
        cpf,
        telefone
    }

    const reposta = await fetch(`http://127.0.0.1:3000/updateUser/${id}`, {

        method: "PUT",
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(dados)
    });


    const resultado = await reposta.json();


     alert(resultado.message)

    setTimeout(() => carregarusers(), 500);
}


document.getElementById('form-edit')?.addEventListener("submit", function(e){
    e.preventDefault();
    editaruser();
})

