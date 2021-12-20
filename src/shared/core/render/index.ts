import pc from 'picocolors';

export const Render = {
  error(message: string) {
    console.log(pc.bgRed(pc.black(` Error: ${message} `)));
  },
  complete(message: string) {
    console.log(`${pc.green(`\u2714`)} ${message}`);
  },
  completeWithError(message: string) {
    console.log(`${pc.red(`\u274C`)} ${message}`);
  },
};
