//for swipeup we start at the end of the array and make our way backwards and push items to the top
//we do not include the first row because we do not want to exceed our boundary

export function swipeUp(gameGrid) {
  for (let i = gameGrid.length - 1; i > 0; i--) {
    for (let j = gameGrid[i].length - 1; j >= 0; j--) {
      if (gameGrid[i][j] !== 0) {
        while (gameGrid[i - 1][j] === 0) {
          gameGrid[i - 1][j] = gameGrid[i][j];
          gameGrid[i][j] = 0;
        }
      }
    }
  }
  return gameGrid;
}

//for swipeleft we start at the end of the array making our way backwards to push all items to the left
//we do not include the left column because we do not want to exceed the boundary when moving items

export function swipeLeft(gameGrid) {
  for (let i = gameGrid.length - 1; i >= 0; i--) {
    for (let j = gameGrid[i].length - 1; j > 0; j--) {
      if (gameGrid[i][j] !== 0) {
        gameGrid[i][j - 1] = gameGrid[i][j];
        gameGrid[i][j] = 0;
      }
    }
  }

  return gameGrid;
}

//for swipedown we start at the beginning of the array and make sure to not include the bottom row to not exceed boundary
export function swipeDown(gameGrid) {
  for (let i = 0; i < gameGrid.length - 1; i++) {
    for (let j = 0; j < gameGrid[i].length; j++) {
      if (gameGrid[i][j] !== 0) {
        gameGrid[i + 1][j] = gameGrid[i][j];
        gameGrid[i][j] = 0;
      }
    }
  }

  return gameGrid;
}

//for swipe right we start at the beginning and push everything from left to right exlcuding the right column because
//we do not want to exceed the boundary of the array index

export function swipeRight(gameGrid) {
  for (let i = 0; i < gameGrid.length; i++) {
    for (let j = 0; j < gameGrid[i].length - 1; j++) {
      if (gameGrid[i][j] !== 0) {
        gameGrid[i][j + 1] = gameGrid[i][j];
        gameGrid[i][j] = 0;
      }
    }
  }

  return gameGrid;
}
