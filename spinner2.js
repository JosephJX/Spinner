let frameDelay = 200;
const animFrames = ['|', '/', '-', '\\'];
const x = frameDelay * animFrames.length;

const animLoop = setInterval(() => {
  for (const i in animFrames) {
    setTimeout(() => {
      process.stdout.write(`\r ${animFrames[i]}   `);
    }, frameDelay * i);
  }
}, x);
