var puzzle = puzzle || {};

puzzle.main = (function() {
  puzzle_board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1]; //initial unshuffled puzzle board
  emptyX = 3;
  emptyY = 3;

  function canMove() {

  };

  function moveHorizontal() {

  };

  function moveVertical() {

  };

  function shuffleBoard() {

  };

  function drawBoard() {

  };

  function attachHandlers() {

  };

  function clickHandler() {

  };

  return {
    playPuzzle: function() {
      shuffleBoard();
      drawBoard();
      attachHandlers();
    }
  }
}());


puzzle.main.playPuzzle();