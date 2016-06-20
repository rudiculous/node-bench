# node-bench

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Simple benchmarking tool.

##  Installation
`npm install @rdcl/bench`

## Usage
```javascript
const bench = require('@rdcl/bench');

// synchronously:
bench('#test 1', () => {
  // do stuff here
})

// asynchronously (don't use arrow notation here!):
bench('#test 2', () => {
  const end = this.async()

  someAsyncStuff.then(end)
})
```

## Tests
`npm test`


[npm-image]: https://img.shields.io/npm/v/@rdcl/bench.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rdcl/bench
[travis-image]: https://img.shields.io/travis/rudiculous/node-bench/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/rudiculous/node-bench
[coveralls-image]: https://img.shields.io/coveralls/rudiculous/node-bench/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/rudiculous/node-bench?branch=master
