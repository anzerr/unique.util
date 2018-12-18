'use strict';

class Simple extends require('./base/key.js') {

	generate(x = 1) {
		let str = '';
		for (let i = 0; i < x; i++) {
			str += Math.random().toString(36).substring(2);
		}
		return str;
	}

}

module.exports = new Simple();
