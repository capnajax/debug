# Cap'n Ajax Debug

Extension and of [Vision Media's debug](https://github.com/visionmedia/debug#readme) module for extra highlighting

## Installation

```sh
$ npm install @capnajax/debug
```

## Usage

All features of the original [Vision Media debug](https://github.com/visionmedia/debug#readme_) module remain available.

### Extra Highlighting

For additional colour highlighting of method names and end points, put the names in square brackets. For this to work, `DEBUG_COLORS` must be set.

```javascript
debug('[myFunction] called with params', arguments);
// highlights [myFunction] in blue

debug('[GET /my/endpoint] called');
// highlights [GET /my/endpoint] in green
```

### Sensitive information

For logs that may contain sensitive information, there's a `debug.sensitive`
method that will only print if the `DEBUG_SENSITIVE` environment variable is
set.

```javascript
debug('[myFunction] called with params', arguments);
// if debug is enabled, prints the log message

debug.sensitive('[myFunction] called with params', arguments);
// if debug is enable AND DEBUG_SENSITIVE is set, prints the log message.
```