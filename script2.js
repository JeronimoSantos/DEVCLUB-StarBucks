// VARIÁVEIS DAS BEBIDAS
let img = document.querySelector('.drink-destaque');
let color = document.querySelector('.drink-destaque-container');

// VARIÁVEIS DARK MODE E WHITE MODE
let buttonDarkWhite = document.getElementById('button-dark-white');
let html = document.querySelector('html');

// FUNÇÃO DAS BEBIDAS
function trocarCor(cor, colo) {
    color.style.background = cor
    color.style.background.houver = colo
}

function trocarImg(endereco) {
    img.src = endereco
}

// FUNÇÃO DARK MODE E WHITE MODE
buttonDarkWhite.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
})
