/**
 * 1 - selecione os elementos h1 button footer e body
 * 2 - se os elementos possuirem a classe dark-mode,
 * modifique seus estilos
 * caso contrario volte os estilos para o original
 *
 *
 */

const h1 = document.getElementById('page-title')
const botao = document.getElementById('mode-selector')
const body = document.getElementsByTagName('body')[0]
const foote = document.getElementsByTagName('footer')[0]


function dark() {
  h1.classList.toggle('dark-mode')
  botao.classList.toggle('dark-mode')
  body.classList.toggle('dark-mode')
  foote.classList.add('dark-mode')
}

botao.addEventListener('click', dark)

/* erro 1 - ao fazer o comando abaixo so consego chamar a funcao 1 unica vez
botao.addEventListener("click",dark()) */
/* 
Erro 2 - o body ao ser pego d forma a baixo retorna uma coleção.
sendo
[0] body
[1] tamanho
const body = document.getElementsByTagName('body');
const foote = document.getElementsByTagName('footer'); */
/*
erro 3 - o codigo abaixo adiciona a classe ".dark-mode", porem observe que o . vai junto.
o que acarreta no mal funcionamento da atividade
   h1.classList.toggle('.dark-mode'),
botao.classList.toggle('.dark-mode')
 body.classList.toggle('.dark-mode') */
/* foote.classList.add('.dark-mode') */
