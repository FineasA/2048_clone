export function swipeUp(gameGrid) {
  //loop through entire multidimensional array for all non-null array items
  //when array item is not null, dive deeper into that index and take the position of Y and increase as much as possible
  //eventually there will be a snake body effect -- will possibly add recursive functions to continuously call itself until a certain value reached

  for (let i = 0; i < gameGrid.length; i++) {
    for (let j = 0; j < gameGrid.length; j++) {
      if (gameGrid[i][j] !== null) {
        gameGrid[i - 1][j].position.y -= 1;
      }
    }
  }
  console.log("changed: ", gameGrid);
  return gameGrid;
}
