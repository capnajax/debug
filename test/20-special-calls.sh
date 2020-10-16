#!/bin/bash

echo Starting test
echo
DEBUG=test DEBUG_COLORS=true node ./20-special-calls.js
echo
DEBUG=test DEBUG_SENSITIVE=true DEBUG_COLORS=true node ./20-special-calls.js
echo
node ./20-special-calls.js
echo

