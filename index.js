const sharp = require('sharp');

sharp('./img.png')
  .composite([
    {
      input: './frame.png',
    }
  ])
  .toFile('./result.png');

