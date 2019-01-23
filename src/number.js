'use strict';

class Num extends require('./base/key.js') {

	generate() {
		let now = String(Date.now());
		return now + this.randomKey(40 - now.length, '0123456789');
	}

}

module.exports = new Num();
