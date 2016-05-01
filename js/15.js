var puzzle = puzzle || {};

puzzle.main = (function() {
  var puzzle_board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1], //initial unshuffled puzzle board
    n = 4, //width & height of board
    emptyX,
    emptyY;

  function canMove(tileX, tileY) {
    //check that clicked tile is adjacent to empty tile
    if((emptyY == tileY && Math.abs(emptyX - tileX) == 1) || (emptyX == tileX && Math.abs(emptyY - tileY) == 1)) {
      return true;
    }

    return false;
  };

  function moveTile(index, tileX, tileY) {
    var emptyIndex = puzzle_board.indexOf(-1);

    //swap clicked tile and empty tile in puzzle array
    puzzle_board[emptyIndex] = puzzle_board[index];
    puzzle_board[index] = -1;

    //update empty tile position
    emptyX = tileX;
    emptyY = tileY;

    drawPuzzleBoard();

    //check if puzzle array is sorted aka solved
    if(checkSorted()) {
      alert("yay");
    }
  };

  function shufflePuzzleBoard() {
    // shuffling algorithm taken from https://bost.ocks.org/mike/shuffle/
    var counter = puzzle_board.length,
      index,
      temp,
      emptyIndex;

    // While there are elements in the puzzle_board
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      temp = puzzle_board[counter];
      puzzle_board[counter] = puzzle_board[index];
      puzzle_board[index] = temp;
    }

    emptyIndex = puzzle_board.indexOf(-1);
    emptyX = emptyIndex % n;
    emptyY = Math.floor(emptyIndex / n);
  };

  function drawPuzzleBoard() {
    var offsetX = 0,
      offsetY = 0,
      index;

    //for each tile set left & top based on position in puzzle array
    $(".puzzle-tile-wrap").each(function(i, e) {
      index = puzzle_board.indexOf(i+1);

      offsetX = 104 * (index % n);
      offsetY = 104 * Math.floor((index / n));

      e.style.left = offsetX + "px";
      e.style.top = offsetY + "px";
    });
  };

  function checkSorted() {
    //check sorted without last index because it's our -1 blank spot
    for(var i = 0; i < puzzle_board.length - 2; ++i) {
      if(puzzle_board[i] > puzzle_board[i+1]) {
        return false;
      }
    }
    return true;
  };

  function attachHandlers() {
    $(".puzzle-tile-wrap").click(clickHandler);
  };

  function clickHandler(e) {
    var domIndex = parseInt(e.currentTarget.dataset['index']),
      tileIndex = puzzle_board.indexOf(domIndex),
      tileX = tileIndex % n,
      tileY = Math.floor(tileIndex / n);

    //check that tile is adjacent then move
    if(canMove(tileX, tileY)) {
      moveTile(tileIndex, tileX, tileY);
    }
  };

  return {
    playPuzzle: function() {
      shufflePuzzleBoard();
      drawPuzzleBoard();
      attachHandlers();
    }
  }
}());


puzzle.main.playPuzzle();