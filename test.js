const chai = require("chai");
chai.should();
const { exec } = require("child_process");
const time = require('./nano-metric');

describe("MODULE usage", function(){
	describe("time -> metric", function(){
		it("testing {} integrety", function() {
			time('2018-01-15T23:38:19.680Z').kd.should.not.any.equal('', 'undefined', 'NaN', null, 'null');
			time('2018-01-15T23:38:19.680Z').cd.should.not.any.equal('', 'undefined', 'NaN', null, 'null');
		});
		it("testing kd convert", function() {
			time('2018-01-15T23:38:19.680Z').kd.should.equal(737.075);
		});
		it("testing cd convert", function() {
			time('2018-01-15T23:38:19.680Z').cd.should.equal(98.495);
		});
		it("iso -> {kd, cd}", function() {
			var obj = {};
			obj.kd = 737.075;
			obj.cd = 98.495;
			time('2018-01-15T23:38:19.680Z').should.deep.equal(obj)
		});
	})
	describe("metric -> time", function(){
		it("convert(kd,cd) -> iso", function() {
			time(737.075, 98.495).toISOString().should.equal('2018-01-15T23:38:19.680Z');
		});
		it("convert({kd,cd}) -> iso", function() {
			var obj = {};
			obj[0] = 737.075;
			obj[1] = 98.495;
			time(obj).toISOString().should.equal('2018-01-15T23:38:19.680Z');
		});
		it("convert({kd: <kd>, cd: <cd>}) -> iso", function() {
			var obj = {};
			obj.kd = 737.075;
			obj.cd = 98.495;
			time(obj).toISOString().should.equal('2018-01-15T23:38:19.680Z');
		});
		it("convert({cd: <cd>, kd: <kd>}) -> iso", function() {
			var obj = {};
			obj.cd = 98.495;
			obj.kd = 737.075;
			time(obj).toISOString().should.equal('2018-01-15T23:38:19.680Z');
		});
	});
});
describe("CLI usage", function(){
	it("Date.now() {} integrety", function(){
		time(Date.now()).kd.should.not.any.equal('', 'undefined', 'NaN', null, 'null');
		time(Date.now()).cd.should.not.any.equal('', 'undefined', 'NaN', null, 'null');
	});
	it("Date.now() -> metric", function() {
		exec('node nano-metric.js', function(error, stdout, stderr) {
			stdout.should.contain.equal(time(Date.now()).kd + ' kd ' + time(Date.now()).cd + ' cd');
			done();
		})
	});
	it("iso -> <kd> kd <cd> cd", function() {
		exec('node nano-metric.js 2018-01-15T23:38:19.680Z', function(error, stdout, stderr) {
			stdout.should.contain.equal('737.075 kd 98.495 cd');
			done();
		})
	});
});