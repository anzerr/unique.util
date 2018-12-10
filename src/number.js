'use strict';

class Num extends require('./base/key.js') {

	generate() {
		let now = new Date().getTime(), length = 40;
		return now + this.randomKey(length - (String(now)).length, '0123456789');
	}

}

module.exports = new Num();
