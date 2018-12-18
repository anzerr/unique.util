'use strict';

const keys = [
	['long', require('./src/long.js')],
	['number', require('./src/number.js')],
	['plain', require('./src/plain.js')],
	['random', require('./src/random.js')],
	['seed', require('./src/seed.js')],
	['short', require('./src/short.js')],
	['simple', require('./src/simple.js')]
];

let out = {};
keys.map((k) => {
	out[k[0]] = (...arg) => {
		return k[1].generate(...arg);
	};
});
module.exports = out;
