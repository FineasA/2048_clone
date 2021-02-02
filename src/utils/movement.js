//for swipeup we are not including the first row because we do not need to swipeup any more, that is the max

export function swipeUp(gameGrid) {
  for (let i = 1; i < gameGrid.length; i++) {
    for (let j = 0; j < gameGrid[i].length; j++) {
      if (gameGrid[i][j] !== null) {
        gameGrid[i - 1][j] = gameGrid[i][j];
        gameGrid[i][j] = null;
      }
    }
  }
  return gameGrid;
}

//for swipeleft we are not including the first column because we cannot exceed the boundary

export function swipeLeft(gameGrid) {
  for (let i = 0; i < gameGrid.length; i++) {
    for (let j = 1; j < gameGrid[i].length; j++) {
      if (gameGrid[i][j] !== null) {
        gameGrid[i][j - 1] = gameGrid[i][j];
        gameGrid[i][j] = null;
      }
    }
  }

  return gameGrid;
}

//for swipedown we start at the end and make our way backwards through the array so we can move the tiles forward, we are not including the
//last row because we cannot exceed the boundary
export function swipeDown(gameGrid) {
  for (let i = gameGrid.length - 2; i >= 0; i--) {
    for (let j = 0; j <= gameGrid[i].length - 1; j++) {
      if (gameGrid[i][j] !== null) {
        gameGrid[i + 1][j] = gameGrid[i][j];
        gameGrid[i][j] = null;
      }
    }
  }

  return gameGrid;
}

//for swipedown we start at the end of the array, making our way backwards so we can move the tiles forward
//we do not include the far right column because we cannot exceed our boundary when looping through array

export function swipeRight(gameGrid) {
  for (let i = gameGrid.length - 1; i >= 0; i--) {
    for (let j = 0; j < gameGrid[i].length - 1; j++) {
      if (gameGrid[i][j] !== null) {
        gameGrid[i][j + 1] = gameGrid[i][j];
        gameGrid[i][j] = null;
      }
    }
  }

  return gameGrid;
}
