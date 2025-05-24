//let titulo = document .querySelector ('h1');
//titulo.innerHTML = 'Jogo do número secreto';

 //O código document.querySelector('h1') seleciona o elemento h1 no HTML, 
 // e a propriedade innerHTML permite que você altere o conteúdo de texto desse elemento. 
 //Ao atribuir o valor 'jogo do número secreto' a innerHTML, 
 // você está atualizando o texto exibido no cabeçalho da página. 

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1; 


function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 100');
}
 
exibirMensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor!');
        } else { 
            exibirTextoNaTela ('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo ();
        }
    }

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        alert ('Todos os números já foram sorteados!');
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
     } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial (); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// = SE USA PARA ATRIBUIR UM VALOR
// == SE USA PARA COMPARAR UM VALOR
// BOOLEANO SIGNIFICA VERDADEIRO OU FALSO

//Os parênteses em uma função são usados para conter os argumentos que a função recebe,
//  permitindo a passagem de informações para a função 
// e influenciando seu comportamento e resultados.
//Ou seja, os parenteses são usados para definir os parâmetros da função.
// array = lista de valores
//lenght = tamanho da lista (array)
// push = adiciona item ao final da lista
// includes = verifica se o valor já existe na lista
// parseInt = converte o valor para inteiro
// Math.random() = gera um número aleatório entre 0 e 1
// Math.random() * 10 = gera um número aleatório entre 0 e 10
// Math.random() * 10 + 1 = gera um número aleatório entre 1 e 10
// parseInt(Math.random() * 10 + 1) = gera um número inteiro aleatório entre 1 e 10

