const buttonOpenModal = document.getElementById('openModal')
const ModalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    ModalWrapper.classList.remove('invisible')
} 

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if(isEscKey) ModalWrapper.classList.add('invisible')
})