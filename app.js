let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value.trim();

    if (nomeAmigo === "") {
        alert("nenhum nome disponivel para adicionar.");
        return;
    }
    amigos.push(nomeAmigo);

    document.getElementById("amigo").value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("nao ha amigos para sortear.");
        return;
    }
}
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos [indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let itemresultado = document.getElementById("li");
    itemresultado.textContent = " Amigo Sorteado: " + amigoSorteado + "";
    resultado.appendChild(itemresultado);
