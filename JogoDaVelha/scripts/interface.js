document.addEventListener('DOMContentLoaded', () => { // Listener quando doc carrega
  let squares = document.querySelectorAll(".square") // pega todas as divs com class square

  squares.forEach((square) => { // para cada div com classe square adiciona um listener com o evento de click e executa a funcao handleClick
    square.addEventListener('click', handleClick)
  })

})

let button = document.getElementById('restart')
button.addEventListener('click', restart)

function handleClick(event){
  // pega o target do evento e armazena na variavel local square, pega o id do elemento e armazena na variavel local position e chama a funçao handleMove em game.js que controla os simbolos 'x' ou 'o' 
  console.log(event.target)

  let square = event.target
  let position = square.id

  if(handleMove(position)){
    setTimeout(() =>{
      let symbolWinner = (playerTime == 0) ? 'Escudo' : 'Espada'
      alert("O Jogo Acabou - O Vencedor Foi " + symbolWinner)
    }, 10)
  }

  updateSquare(position)
}

// atualiza o quadrado com o simbolo
function updateSquare(position){
  let square = document.getElementById(position.toString())
  let symbol = board[position]

  square.innerHTML = `<div class='${symbol}'></div>`
}

// atualiza todos os quadrados
function updateSquares(){
  
  let squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    let position = square.id
    let symbol = board[position]

    if (symbol != ''){
      square.innerHTML = `<div class='${symbol}'></div>`
    }
  })
}

function restart(){
  let squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    let position = square.id
    let symbol = board[position]

    if (symbol != ''){
      square.innerHTML = ''
    }
  })
  
  board = ['','','','','','','','','']
  playerTime = 0
  gameOver = false

}