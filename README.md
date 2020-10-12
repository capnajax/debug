# Cap'n Ajax Debug

Extension and of [Vision Media's debug](https://github.com/visionmedia/debug#readme) module for extra highlighting

## Installation

```sh
$ npm install @capnajax/debug
```

## Usage

All features of the original [Vision Media debug](https://github.com/visionmedia/debug#readme_) module remain available.

### Extra Highlighting

For additional colour highlighting of method names and end points, put the names in square brackets

```javascript
debug('[myFunction] called with params', arguments);
// highlights [myFunction] in blue

debug('[GET /my/endpoint] called');
// highlights [GET /my/endpoint] in green
```
