async function carregarusers() {


    const resposta = await fetch("http://localhost:3000/Usuario");

    const dados = await resposta.json();


    const usuarios = dados.data


    alert(dados.message)


    rederizarusers(usuarios)

    
}



function rederizarusers(usuarios) {

    const lista = document.getElementById("usuarios-list");

    lista.innerHTML = usuarios.map(usuario => `


        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title mb-3">${usuario.name}</h5>
                    <p class="mb-2"><strong>CPF:</strong> ${usuario.cpf}</p>
                    <p class="mb-0"><strong>Telefone:</strong> ${usuario.telefone}</p>
                </div>
            </div>
        </div>

        
`).join('')}


        
document.addEventListener("DOMContentLoaded", carregarusers);