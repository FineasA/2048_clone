export function getInitialTilePositions() {
  let tile1pos = {
    x: 0,
    y: 0,
  };
  let tile2pos = {
    x: 0,
    y: 0,
  };

  //get coords of tile 1
  tile1pos.x = getRandomIntInclusive(0, 3);
  tile1pos.y = getRandomIntInclusive(0, 1);

  //get coords of tile 2
  tile2pos.x = getRandomIntInclusive(0, 3);
  tile2pos.y = getRandomIntInclusive(2, 3);

  //the reason behind the tile positions of y having different restrictions is so that tiles never overlap on initilization

  let tilesPositions = {
    tile1pos: tile1pos,
    tile2pos: tile2pos,
  };

  return tilesPositions;
}

export function createGameGridArray() {
  let gameGrid = [];

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 4; j++) {
      gameGrid.push(Array(4).fill(0));
    }
  }
  return gameGrid;
}

export function randomNewTileValue() {
  return Math.random() > 0.5 ? 2 : 4;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
