'use strict';

const debug = require('../index')('test');
const sensitive = process.env.DEBUG_SENSITIVE;

if (! debug.enabled) {
  console.log("This test has debug disabled. There should be no logs here");
}

debug('DEBUG_SENSITIVE is turned', sensitive ? 'ON' : 'OFF');
debug('[testFunction] this test function should be highlighted');
debug('[GET testEndpoint] this end point should be highlighted');
debug('The next line is a password. It should',
    sensitive ? 'NOT be' : 'be', 'displayed.');
debug.sensitive('SENSITIVE_PASSWORD')
debug('This concludes the test');
