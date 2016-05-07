describe("15Puzzle", function() {
  beforeEach(function() {

  });

  describe("checking if tile can move", function() {
    it("can move tile adjacent to empty tile", function() {
      puzzle.main.emptyX = 0;
      puzzle.main.emptyY = 0;

      var canMove = puzzle.main.canMove(0, 1);

      expect(canMove).toBe(true);
    });

    it("cannot move tiles that aren't adjacent to empty tile", function() {
      puzzle.main.emptyX = 0;
      puzzle.main.emptyY = 0;

      var canMove = puzzle.main.canMove(1, 1);

      expect(canMove).toBe(false);
    });
  });

  describe("swappables testing", function() {
    beforeEach(function() {
      this.n = 4;
    });

    it("neighbors for top left corner", function() {
      swappables = puzzle.main.getSwappables(0);

      expect(swappables).toContain(1);
      expect(swappables).toContain(4);
      expect(swappables.length).toBe(2);
    });

    it("neighbors for top right corner", function() {
      swappables = puzzle.main.getSwappables(3);

      expect(swappables).toContain(2);
      expect(swappables).toContain(7);
      expect(swappables.length).toBe(2);
    });

    it("neighbors for bottom left corner", function() {
      swappables = puzzle.main.getSwappables(12);

      expect(swappables).toContain(8);
      expect(swappables).toContain(13);
      expect(swappables.length).toBe(2);
    });

    it("neighbors for bottom right corner", function() {
      swappables = puzzle.main.getSwappables(15);

      expect(swappables).toContain(11);
      expect(swappables).toContain(14);
      expect(swappables.length).toBe(2);
    });

    it("neighbors for top edge", function() {
      swappables = puzzle.main.getSwappables(1);

      expect(swappables).toContain(0);
      expect(swappables).toContain(2);
      expect(swappables).toContain(5);
      expect(swappables.length).toBe(3);
    });

    it("neighbors for left edge", function() {
      swappables = puzzle.main.getSwappables(4);

      expect(swappables).toContain(0);
      expect(swappables).toContain(5);
      expect(swappables).toContain(8);
      expect(swappables.length).toBe(3);
    });

    it("neighbors for bottom edge", function() {
      swappables = puzzle.main.getSwappables(14);

      expect(swappables).toContain(10);
      expect(swappables).toContain(13);
      expect(swappables).toContain(15);
      expect(swappables.length).toBe(3);
    });

    it("neighbors for right edge", function() {
      swappables = puzzle.main.getSwappables(11);

      expect(swappables).toContain(7);
      expect(swappables).toContain(10);
      expect(swappables).toContain(15);
      expect(swappables.length).toBe(3);
    });

    it("neighbors for center piece", function() {
      swappables = puzzle.main.getSwappables(6);

      expect(swappables).toContain(2);
      expect(swappables).toContain(5);
      expect(swappables).toContain(7);
      expect(swappables).toContain(10);
      expect(swappables.length).toBe(4);
    });
  });

  it("verifies array is sorted", function() {
    puzzle.main.puzzle_board = [0,1,2,3,4,5,6,7,8,9,10];
    var sorted = puzzle.main.checkSorted();

    expect(sorted).toBe(true);
  });

  it("verifies array is not sorted", function() {
    puzzle.main.puzzle_board = [1,0,2,3,4,5,6,7,8,9,10];
    var sorted = puzzle.main.checkSorted();

    expect(sorted).toBe(false);
  });
});