
//let titulo = document .querySelector ('h1');
//titulo.innerHTML = 'Jogo do número secreto';

 //O código document.querySelector('h1') seleciona o elemento h1 no HTML, 
 // e a propriedade innerHTML permite que você altere o conteúdo de texto desse elemento. 
 //Ao atribuir o valor 'jogo do número secreto' a innerHTML, 
 // você está atualizando o texto exibido no cabeçalho da página. 

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1; 

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
 
exibirMensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Voce acertou!');
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
    return parseInt(Math.random() * 10 + 1);
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
=======
//let titulo = document .querySelector ('h1');
//titulo.innerHTML = 'Jogo do número secreto';

 //O código document.querySelector('h1') seleciona o elemento h1 no HTML, 
 // e a propriedade innerHTML permite que você altere o conteúdo de texto desse elemento. 
 //Ao atribuir o valor 'jogo do número secreto' a innerHTML, 
 // você está atualizando o texto exibido no cabeçalho da página. 

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1; 

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
 
exibirMensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Voce acertou!');
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
    return parseInt(Math.random() * 10 + 1);
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