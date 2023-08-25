let jogador1, jogador2;
let estado = document.getElementById('status');
let botaoIniciar = document.getElementById('iniciar');
let botaoReiniciar = document.getElementById('reiniciar')
let vez
let celulas = document.querySelectorAll(".celula")
let iniciar = false
let tabuleiro = ['','','','','','','','','']
let contadorJogadas = 0


  botaoIniciar.addEventListener('click', function(){
  jogador1 = document.getElementById('player1').value || "Jogador 1"
  jogador2 = document.getElementById('player2').value || "Jogador 2"
  iniciar = true
  estado.textContent = 'Sua vez, ' + jogador1
  estado.id = 'statusX'
  vez = jogador1
  document.getElementById('player1').disabled = true
  document.getElementById('player2').disabled = true
})

botaoReiniciar.addEventListener('click', function(){
  celulas.forEach(function(elemento){
    elemento.textContent = ''
    elemento.style.backgroundColor = '#f5b6fc'
  })
  tabuleiro = ['','','','','','','','','']
  contadorJogadas = 0
  iniciar = false
  estado.id = 'statusX'
  estado.textContent = ''
  document.getElementById('player1').disabled = false
  document.getElementById('player2').disabled = false
  document.getElementById('player1').value = ''
  document.getElementById('player2').value = ''
})


 function winner(elemento,a,b,c){
  estado.id = 'win'
  elemento === 'X' ? estado.textContent = `${jogador1} venceu` : estado.textContent = `${jogador2} venceu`
  celulas[a].style.backgroundColor = '#aca8a8'
  celulas[b].style.backgroundColor = '#aca8a8'
  celulas[c].style.backgroundColor = '#aca8a8'
  iniciar = false
 }

 function check(elemento){
  contadorJogadas++
  tabuleiro[elemento.id-1] = elemento.textContent
  if(tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2] && tabuleiro[2] !== ''){
    winner(tabuleiro[0],1,2,3)
    return true
  }
  else if(tabuleiro[3] === tabuleiro[4] && tabuleiro[3] === tabuleiro[5] && tabuleiro[5] !== ''){
    winner(tabuleiro[3],3,4,5)
    return true
  }

  else if(tabuleiro[6] === tabuleiro[7] && tabuleiro[6] === tabuleiro[8] && tabuleiro[8] !== ''){
    winner(tabuleiro[6],6,7,8)
    return true
  }
  else if(tabuleiro[0] === tabuleiro[3] && tabuleiro[3] === tabuleiro[6] && tabuleiro[6] !== ''){
    winner(tabuleiro[0],0,3,6)
    return true
  }
  else if(tabuleiro[1] === tabuleiro[4] && tabuleiro[1] === tabuleiro[7] && tabuleiro[7] !== ''){
    winner(tabuleiro[1],1,4,7)
    return true
  }
  else if(tabuleiro[2] === tabuleiro[5] && tabuleiro[8] === tabuleiro[5] && tabuleiro[5] !== ''){
    winner(tabuleiro[2],2,5,8)
    return true
  }
  else if(tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8] && tabuleiro[8] !== ''){
    winner(tabuleiro[0],0,4,8)
    return true
  }
  else if(tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6] && tabuleiro[6] !== ''){
    winner(tabuleiro[2],2,4,6)
    return true
  }
  else if(contadorJogadas === 9){
    estado.textContent = 'Empate'
    estado.id = 'win'
    iniciar = false
    return true
  }
 }
celulas.forEach(function(ev){
  ev.addEventListener('click', function(){
    if(ev.textContent === '' && iniciar === true){
      ev.textContent = vez === jogador1 ? "X" : "O"
      ev.style.color = vez === jogador1 ? '#750202' : '#080063'
      if(check(ev) != true){
        vez = vez === jogador1 ? jogador2 : jogador1
        estado.id = vez === jogador1 ? 'statusX' : 'statusO'
        estado.textContent = vez === jogador1 ? 'Sua vez, ' + jogador1 : 'Sua vez, ' + jogador2
      } 
    }
  })
})
