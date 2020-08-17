'use strict';

const enabled = !!process.env.DEBUG
const END_COLOR = '\x1b[0m';
const ENDPOINT_COLOR = '\x1b[97;42m';
const METHOD_COLOR = '\x1b[97;44m';

function fakeLog() {
  let fakeDebug = () => {};
  fakeDebug.enabled = false;

  return fakeDebug;
}

function log(namespace) {
  let debug = require('debug')(namespace);
  let result = function log(...s) {
    let firstArg = s.length > 0 ? s[0] : '';
    let otherArgs = s.length > 1 ? s.slice(1) : [];
    if (typeof firstArg === 'string' && process.env.DEBUG_COLORS) {
    // highlight some things
    firstArg = firstArg
      .replace(/^\[([A-Z]+ \S*)\]/, `${ENDPOINT_COLOR}$1${END_COLOR}`)
      .replace(/^\[(\S*)\]/, `${METHOD_COLOR}$1${END_COLOR}`);
    }
    debug.apply(null, [firstArg].concat(otherArgs));
  };
  
  debug.log = console.log.bind(console);
  return result;
}

module.exports = enabled ? log : fakeLog;
