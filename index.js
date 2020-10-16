'use strict';

const enabled = !!process.env.DEBUG
const END_COLOR = '\x1b[0m';
const ENDPOINT_COLOR = '\x1b[97;42m';
const METHOD_COLOR = '\x1b[97;44m';

function fakeLog() {
  let fakeDebug = () => {};
  fakeDebug.enabled = false;

  fakeDebug.sensitive = function fakeLog_sensitive() {}

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

  // extra logging functions

  // call this if the message may contain sensitive information like passwords
  // and keys. These messages will only go out if DEBUG_SENSITIVE is set.
  result.sensitive = function log_sensitive(...s) {
    if (process.env.DEBUG_SENSITIVE) {
      result.apply(null, s);
    }
  }

  return result;
}


module.exports = enabled ? log : fakeLog;
