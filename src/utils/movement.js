//for swipeup we start at the end of the array and make our way backwards and push items to the top
//we do not include the first row because we do not want to exceed our boundary

function checkIfColumnGap(currentGameGrid) {
  let isGap = false;

  for (let i = currentGameGrid.length - 1; i > 0; i--) {
    for (let j = currentGameGrid[i].length - 1; j >= 0; j--) {
      if (currentGameGrid[i][j].value > 0) {
        isGap = currentGameGrid[i - 1][j] === 0 ? true : false;
        return isGap;
      }
    }
  }
}

export function swipeUp(gameGrid) {
  let _gameGridClone = [...gameGrid];

  for (let i = _gameGridClone.length - 1; i > 0; i--) {
    for (let j = _gameGridClone[i].length - 1; j >= 0; j--) {
      if (_gameGridClone[i][j] !== 0) {
        while (_gameGridClone[i - 1][j] === 0) {
          _gameGridClone[i - 1][j] = _gameGridClone[i][j];
          _gameGridClone[i][j] = 0;
        }
      }
    }
  }

  let foundGap = checkIfColumnGap(_gameGridClone);

  if (foundGap) {
    swipeUp(_gameGridClone);
  } else {
    //oddly enough here when logging out gameGrid it is clearly an object but the react file reads it as undefined...
    gameGrid = _gameGridClone;
    console.log("Just before returned...", gameGrid);
    return gameGrid;
  }
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
