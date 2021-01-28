export function getRandomIntInclusive() {
  let tile1pos = 0;
  let tile2pos = 0;

  tile1pos = Math.floor(Math.random() * (8 - 1 + 1) + 1);
  tile2pos = Math.floor(Math.random() * (15 - 9 + 1) + 9);

  let positions = {
    tile1pos: tile1pos,
    tile2pos: tile2pos,
  };

  return positions;
}
