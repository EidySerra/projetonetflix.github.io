
let botaoSom = document.querySelector('.botao-som')
let video = document.querySelector('.video')
let AbrirModal = document.querySelector('#AbrirModal')
let modal = document.querySelector('#modal')
let overlay = document.querySelector('#overlay')
let closeModalBtn = document.querySelector('#closeModalBtn')



botaoSom.addEventListener('click', ligarSom)
AbrirModal.addEventListener('click', Aberto )
overlay.addEventListener('click', SairModal)
closeModalBtn.addEventListener('click', BotaoFecharModal)





// Prepara o áudio tocar o tumdom
const playLink = document.getElementById('play');
const audio = new Audio('audio/tudum-netflix-sound.mp3');

play.addEventListener('click', (event) => {
  event.preventDefault(); // Impede que o link abra o áudio na página
  audio.currentTime = 0;  // Reinicia o áudio
  audio.play();           // Toca o som
});


// ligar son do vido
function ligarSom(){
    video.muted = false;
}
// Abrir modal
function Aberto(){
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

 // Clicar fora do modal também fecha
function SairModal(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
// Botão para fechar modal
function BotaoFecharModal(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }