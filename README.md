# mpgconvert

[![Build Status](https://travis-ci.org/attila/mpgconvert.svg?branch=master)](https://travis-ci.org/attila/mpgconvert) [![Coverage Status](https://coveralls.io/repos/github/attila/mpgconvert/badge.svg?branch=master)](https://coveralls.io/github/attila/mpgconvert?branch=master)

Convert fuel consumption between mpg and l/100km in Node.js

The module currently supports conversions between miles per imperial gallon (mpg) and litres per 100 km.

## Installation

The project is published to the npm registry, install it via your favourite package manager for node:

```bash
npm i mpgconvert
```

If you wish to use it as a handy tool in your command line, install it globally

```bash
npm i -g mpgconvert
```

## Usage

### As a module

The module has two separate functions exported for conversions.

```javascript
const { mpg, l100km } = require('mpgconvert')

mpg(38)
// 7.433711924989639
l100km(7.2)
// 45.561460185420366
```

### Command line

The package installs a command line executable named `mpgc`.

```text
Usage: mpgc <command> [value]

Commands:
  mpg [value]     Convert fuel consumption from mpg to l/100km      [aliases: m]
  l100km [value]  Convert fuel consumption from l/100km to mpg      [aliases: l]

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
```

Examples:

```bash
$ mpgc m 48
5.885021940616797
$ mpgc l 5.85
48.287359512753206
```

## Planned features

* Conversion to and from in US mpg
