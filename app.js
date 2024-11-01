function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3 class="categoria">${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    <button class="remover-cartao">✖</button>
`;


    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.querySelector('.cartao__conteudo').addEventListener('click', viraCartao);

    const botaoRemover = cartao.querySelector('.remover-cartao');
    botaoRemover.addEventListener('click', function(event) {
        event.stopPropagation();
        container.removeChild(cartao);
    });

    container.appendChild(cartao);
}


document.getElementById('form-cartao').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const categoria = document.getElementById('categoria').value;
    const pergunta = document.getElementById('pergunta').value;
    const resposta = document.getElementById('resposta').value;

    if (categoria && pergunta && resposta) {
        criaCartao(categoria, pergunta, resposta);
        event.target.reset(); 
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
