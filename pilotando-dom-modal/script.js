/**
 * observar o botao la do html
 * quando click no botao eu preciso
 *
 * pegar a div com a classe modal-wrapper
 * e retirar a classe invisible dela
 *
 * quando eu apertar em esc irei colocar a classe de volta
 *
 *
 *
 * botao com id openModal - pegar ele via js
 * adicionar um listening
 *
 * abrir o modal
 */

/*
Meu codigo - ele abre mas não fecha o modal
const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')
const teclaESQ = document.querySelector('#tecla-esq')

function abrirModal() {
  console.log(modalWrapper)

  modalWrapper.classList.remove('invisible')
  console.log(modalWrapper)
}

function fecharModal(event) {
  console.log('entrei na função fechar modal')
  if (event.keyCode === 27) {
    console.log('entrei no if, abertou a tecla esq')
    modalWrapper.classList.add('invisible')
    console.log('nao sei porque nao fechou')
  }
}

console.log('valores da tecla esq\n' + teclaESQ + '\n---------\n\n')
buttonOpenModal.addEventListener('click', abrirModal)

*/

const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')
let modalOpen = false

buttonOpenModal.onclick = function () {
  modalOpen = true
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', event => {
  if (modalOpen) {
    const isEsqKey = event.key === 'Escape'
    if (isEsqKey) {
      modalWrapper.classList.add('invisible')
    }
  }
})
