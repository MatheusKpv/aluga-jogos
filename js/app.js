let confirmacao = '';

function alterarStatus(numeroBotao) {
    let classe = document.getElementById(`game-${numeroBotao}`);
    let textoProvisorio = classe.querySelector('.dashboard__item__button');
    let divProvisorio = classe.querySelector('.dashboard__item__img');
    if (textoProvisorio.classList.contains('dashboard__item__button--return')) {
        msgConfirmacao();
        if (confirmacao == 's') {
            textoProvisorio.innerHTML = 'Alugar';
            textoProvisorio.classList.remove('dashboard__item__button--return');
            divProvisorio.classList.remove('dashboard__item__img--rented');
        } else {
            alert('voce desejou continuar com o jogo');
        }
        confirmacao = '';
    } else {
        textoProvisorio.innerHTML = 'Devolver';
        textoProvisorio.classList.add('dashboard__item__button--return');
        divProvisorio.classList.add('dashboard__item__img--rented');
    }
};

function msgConfirmacao() {
    while (confirmacao != 's' && confirmacao != 'n') {
        confirmacao = prompt('deseja devolver o jogo? (s/n)');
        if (confirmacao != 's' && confirmacao != 'n') {
            alert(`por favor, digite 's' ou 'n'`);
        }
    }
}