var chai = require("chai");
chai.should();

const time = require('./nano-metric');

//Mon Jan 15 2018 23:38:19 GMT+0100
it("testing kd convert", function() {
	time(1516055899813).kd.should.equal('737.075');
});
it("testing cd convert", function() {
	time(1516055899813).cd.should.equal('98.495');
});