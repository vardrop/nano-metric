var args = process.argv.slice(2);
var date = (args.length == 1) ? new Date(args[0]) : new Date();
var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

if(args.length == 2) {
	date = {};
	date.kd = args[0];
	date.cd = args[1];
}

if (require.main === module) {
	if (args.length == 1 || args.length == 0) {
		console.log(convert(date).kd + ' kd ' + convert(date).cd + ' cd');
	} else if (args.length == 2) {
		console.log(convert(date.kd, date.cd));
	}
}

function convert() {
	if (arguments.length == 1) {
		if (arguments[0].hasOwnProperty('kd') || arguments[0].hasOwnProperty('cd')) {
			return bconvert(arguments[0].kd, arguments[0].cd)
		} else if (Object.keys(arguments[0]).length == 2) {
			return bconvert(arguments[0][0], arguments[0][1])
		} else {
			arguments[0] = (new Date(arguments[0]) === 'Invalid Date') ? arguments[0] : new Date(arguments[0]).getTime() + tzoffset;
			var kd = Number(((arguments[0] - new Date("0000-01-01")) / 86400000000).toFixed(3));
			var cd = Number(((arguments[0] - new Date(arguments[0]).setHours(0, 0, 0, 0)) / 864000).toFixed(3));
			return { kd, cd };
		}
	} else if (arguments.length == 2) {
		return bconvert(arguments[0], arguments[1]);
	}
}

function bconvert(kd, cd) {
	var days = Number(kd) * 86400000000 - 62167235207000;
	var hours = Number(cd) * 864000;
	days = new Date(days).toISOString().replace(/T.*$/, '');
	hours = new Date(hours).toISOString().replace(/^.*T/, '');
	var time = new Date(Date.parse(days + 'T' + hours));
	return time;
}

module.exports = convert;