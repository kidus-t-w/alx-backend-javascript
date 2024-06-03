#!/usr/bin/env node
const process = require('process');

const displayMessage = (message) => {
  process.stdout.write(`${message}\n`);
};

module.exports = displayMessage;
