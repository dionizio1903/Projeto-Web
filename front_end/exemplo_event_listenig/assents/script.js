/*objetivo
ao clicar no botao a cor de fundo da caixa seja alterada 
apresentar o texto click no console
remover o evento click do botao
*/

let caixa = document.querySelector('.caixa')
let botao = document.querySelector('button')

function executa(event){
    caixa.classList.add('cor-fundo-caixa')
    console.log('clique')
   botao.removeEventListener('click',executa)
}

botao.addEventListener('click', executa)