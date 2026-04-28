async function Createuser() {

    const name = document.getElementById("usuario-name").value
    const cpf = document.getElementById("usuario-cpf").value
    const telefone = document.getElementById("usuario-telefone").value

    if (!name || !cpf || !telefone ){
        alert("preencha os campos")
        return;
    }

    const dados = {

        name,
        cpf,
        telefone

    }

    const reposta = await fetch("http://127.0.0.1:3000/CreateUser", {

        method: "POST",
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(dados)
    });


    const resultado = await reposta.json();


     alert(resultado.message)

    setTimeout(() => carregarusers(), 500);
}


document.getElementById('form-create')?.addEventListener("submit", function(e){
    e.preventDefault();
    Createuser();
})

