# nano-metric

A cli/module for [suzuki-yuki/metric-time](https://github.com/suzuki-yuki/metric-time)

## Getting Started

d-values, such as `kdd` and `cdd` are values (i.e. numbers) 
whereas values, such as `kd` and `cd` are identifiers.

This is how we roll:

### Installing

`$ npm i [-g] nano-metric` -g just for using cli

## Usage

### Cli

`$ node nano-metric [date]|[kdd cdd]`
If no date is supplied, the metric time now is printed (forward conversion or simple conversion).
If `kdd` and `cdd` values are supplied, the iso time of these values is printed (backwards conversion).

### Module
```javascript
const time = require('nano-metric');

while(true) {
  metric = time(new Date());
  process.stdout.write(metric.kd + ' kd ' + metric.cd + ' cd\r');
}
```
Should give you the output of https://suzuki-yuki.github.io/metric-time.

## API

### self(date)

Returns an object (nano-metric-object) of the structure:
```
{
  kd: kdd,
  cd: cdd
}
```
where `kdd` is the time in kilodays and `cdd` is the time in centidays.

### self(kdd, cdd)

Takes `kdd` and `cdd` values as input and
returns a Date()-object from `kdd` and `cdd` values.

### self({kd: kdd, cd: cdd})

Order of `kd: kdd` and `cd: cdd` does NOT matter.
Takes an nano-metric-object as input and
returns a Date()-object from nano-metric-object.
Better usability and preferred over `self({kdd, cdd})`.

### self({kdd, cdd})

Order of `kdd` and `cdd` DOES matter.
Takes an sorted objected as input and
returns a Date()-object from sorted object.

## Tests

`$ npm run test`

## Built With

* [suzuki-yuki/metric-time](https://github.com/suzuki-yuki/metric-time) the new standart time
* [vardrop/license-checker-cli](https://github.com/vardrop/license-checker-cli) shameless selfpromoting
* [siddharthkp/cost-of-modules](https://github.com/siddharthkp/cost-of-modules) calculating the cost
* [chai](https://github.com/chaijs/chai) & [mocha](https://github.com/mochajs/mocha) for unit testing
