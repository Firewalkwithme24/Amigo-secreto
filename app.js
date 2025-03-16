//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("amigo");
    const btnAdicionar = document.querySelector(".button-add");
    const btnSortear = document.querySelector(".button-draw");
    const listaNomes = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    let nomes = [];

    btnAdicionar.addEventListener("click", function () {
        capturarValorEntrada();
    });

    function capturarValorEntrada() {
        const nome = inputNome.value.trim();
        validarEntrada(nome);
    }

    function validarEntrada(nome) {
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }
        
        if (nomes.includes(nome)) {
            alert("Este nome já foi adicionado.");
            return;
        }

        atualizarArrayNomes(nome);
    }

    function atualizarArrayNomes(nome) {
        nomes.push(nome);
        atualizarLista();
        limparCampoEntrada();
    }

    function limparCampoEntrada() {
        inputNome.value = "";
        inputNome.focus();
    }

    btnSortear.addEventListener("click", function () {
        if (nomes.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        
        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    });

    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }
});