import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from 'node:process';
import { EOL } from 'node:os';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const cleanString = chunk.toString();
      const reverseString = cleanString.split('').reverse().join('');
      const finalResult = `${reverseString}${EOL}`;
      callback(null, finalResult);
    },
  });
  await pipeline(stdin, reverseTransform, stdout);
};

await transform();
