var args = process.argv.slice(2);
var date = (args.length == 1) ? new Date(args[0]) : new Date();

if (require.main === module) {
	console.log(convert(date).kd + ' kd ' + convert(date).cd + ' cd');
}

function convert(time) {
	var kd = ((time - new Date("0000-01-01")) / 86400000000).toFixed(3);
	var cd = ((time - new Date(time).setHours(0, 0, 0, 0)) / 864000).toFixed(3);
	return { kd, cd }
}

module.exports = convert;