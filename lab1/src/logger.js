/* eslint-disable no-console */
const log = (msg) => log(msg);

const logColored = (msg, color) => log(color, msg);

const logError = (msg) => console.error(msg);

const color = {
  yellow: '\x1b[33m%s\x1b[0m',
};

module.exports = {
  log, logColored, color, logError,
};
