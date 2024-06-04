#!/usr/bin/env node
const process = require('process');

/**
 * Writes the given message to the standard output.
 *
 * @param {string} message - The message to be displayed.
 * @return {void} This function does not return anything.
 */
const displayMessage = (message) => {
  process.stdout.write(`${message}\n`);
};

module.exports = displayMessage;
