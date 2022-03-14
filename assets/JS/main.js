let nome = window.prompt('Digite seu Nome');
let nome2 = nome || 'Usuário'
let h1 = document.querySelector('.nome');
let imagem;
let h2 = document.querySelector('h2');
let raca = document.querySelector('.raca')
const racas = ['Humano', 'Elfo', 'Anão'];
function changeImage(parametro){
    switch (parametro){
        case 0:
            imagem = document.getElementById('img').src = `./assets/Imagens/humano.jpg`;
        return imagem
        case 1:
            imagem = document.getElementById('img').src = `./assets/Imagens/elfo.jpg`;
        return imagem 
        case 2:
            imagem = document.getElementById('img').src = `./assets/Imagens/anao.jpg`;
        return imagem
    }
}
let i = 0;
h1.innerText = `Nome: ${nome2}`;
h2.style.color = 'white';
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('button')){
         i++
         if(i >= 3){
            i = 0
        }
         raca.innerHTML = `Raça: ${racas[i]}`
         changeImage(i);
    }
    if(el.classList.contains('play')){
        alert(`Você escolheu a raça ${racas[i]}`);
    }
    console.log(i)
});