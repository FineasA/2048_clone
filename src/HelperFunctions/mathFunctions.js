export function getRandomIntInclusive(min, max) {
  let tile1pos = 0;
  let tile2pos = 0;

  min = Math.ceil(min);
  max = Math.floor(max);

  tile1pos = Math.floor(Math.random() * (8 - 1 + 1) + 1);
  tile2pos = Math.floor(Math.random() * (16 - 9 + 1) + 9);

  let positions = {
    tile1pos: tile1pos,
    tile2pos: tile2pos,
  };

  return positions;
}
