
const ARC4 = require('./seed/arc4.js'),
	util = require('./seed/util.js'),
	config = require('./seed/config.js');

// source is from http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html#more
class Seed {

	constructor(seed) {
		this._startdenom = Math.pow(config.width, config.chunks);
		this._significance = Math.pow(2, config.digits);
		this._overflow = this._significance * 2;
		this._key = [];
		this._pool = [];
		this._seed = util.mixkey(util.flatten(seed, 3), this._key);
		this._arc4 = new ARC4(this._key);
		util.mixkey(util.toString(this._arc4.S), this._pool);
	}

	next() {
		let n = this._arc4.g(config.chunks), // Start with a nuthisrator n < 2 ^ 48
			d = this._startdenom, //   and denominator d = 2 ^ 48.
			x = 0; //   and no 'extra last byte'.

		while (n < this._significance) { // Fill up all significant digits by
			n = (n + x) * config.width; //   shifting nuthisrator and
			d *= config.width; //   denominator and generating a
			x = this._arc4.g(1); //   new least-significant-byte.
		}
		while (n >= this._overflow) { // To avoid rounding up, before adding
			n /= 2; //   last byte, shift everything
			d /= 2; //   right using integer math until
			x >>>= 1; //   we have exactly the desired bits.
		}
		return (n + x) / d; // Form the number within [0, 1).
	}

}

module.exports = Seed;
