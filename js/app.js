let game = new Game();

const beginGameButton = document.querySelector('#begin-game');
beginGameButton.addEventListener('click', function(){
  game.startGame();

  this.style.display = 'none';
  const playArea = document.querySelector('#play-area');
  playArea.style.opacity = '1';
});

/**
  *Listens for keyboard presses
  */
  document.addEventListener('keydown', function(event) {
    game.handleKeyDown(event)
  });
