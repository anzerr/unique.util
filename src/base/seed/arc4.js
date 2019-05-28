
const config = require('./config.js');

class ARC4 {

	constructor(key) {
		let t = null, keylen = key.length, i = 0, j = this.i = this.j = 0, s = this.S = [];

		if (!keylen) {
			key = [keylen++];
		}

		while (i < config.width) {
			s[i] = i++;
		}
		for (i = 0; i < config.width; i++) {
			s[i] = s[j = config.mask & (j + key[i % keylen] + (t = s[i]))];
			s[j] = t;
		}
		this.g(config.width);
	}

	g(count) {
		let t = null, r = 0, i = this.i, j = this.j, s = this.S;
		while (count--) {
			t = s[i = config.mask & (i + 1)];
			r = r * config.width + s[config.mask & ((s[i] = s[j = config.mask & (j + t)]) + (s[j] = t))];
		}
		this.i = i; this.j = j;
		return r;
	}

}

module.exports = ARC4;
