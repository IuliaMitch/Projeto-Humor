let nome = window.prompt('Digite seu Nome');
let nome2 = nome || 'Iulia'
let h1 = document.querySelector('.nome');
let imagem;
let h2 = document.querySelector('h2');
let raca = document.querySelector('.raca')
const racas = ['Humano', 'Elfo', 'Anão'];
function changeImage(parametro){
    switch (parametro){
        case 0:
            imagem = document.getElementById('img').src = `https://i.pinimg.com/474x/21/8c/13/218c138d4b34485a64304239bb919de0.jpg`;
        return imagem
        case 1:
            imagem = document.getElementById('img').src = `http://pm1.narvii.com/7147/2f4df860f773926acbaa1549ab9fcf8518b85382r1-640-960v2_uhq.jpg`;
        return imagem 
        case 2:
            imagem = document.getElementById('img').src = `https://pm1.narvii.com/6597/9e50bd91ce3e0e7e5a13a7f68d312a31b806c529_hq.jpg`;
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
    console.log(i)
});