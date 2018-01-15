# nano-time

A cli/module for [suzuki-yuki/metric-time](https://github.com/suzuki-yuki/metric-time)

## Getting Started

This is how we roll:

### Installing

`$ npm i <-g> nano-time` -g nur für Cli-Nutzung

## Usage

### Cli

`$ node nano-time`

### Module
```javascript
const time = require('./nano-time');

console.log(time(new Date()).kd + ' kd ' + time(new Date()).cd + ' cd');
```
Should give you the output of https://suzuki-yuki.github.io/metric-time.

## API

### self(date)

Returns an object of the structure:
```
{
  kd: '<kd>',
  cd: '<cd>'
}
```
where <kd> is the time in kilodays and <cd> is the time in centidays.

## Tests

`$ npm run test`

## Built With

* [suzuki-yuki/metric-time](https://github.com/suzuki-yuki/metric-time) the new standart time
* [vardrop/nano-scripts](https://github.com/vardrop/nano-scripts) shameless selfpromoting
* [chai](https://github.com/chaijs/chai) & [mocha](https://github.com/mochajs/mocha) for unit testing
