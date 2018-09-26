class Board {
  constructor () {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
  *Generates 2d array of spaces
  returns array of Spaces
  */
  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++){
      const col = [];

      for (let y = 0; y < this.rows; y++) {
        let space = new Space(x, y);
        col.push(space);
      }
      spaces.push(col);
    }
    return spaces;
  }

  drawHTMLBoard() {
    for (let column of this.spaces) {
      for (let space of column) {
        space.drawSVGSpace();
      }
    }//end for loop

  }//end drawHTMLBoard()

}
