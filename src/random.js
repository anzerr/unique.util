'use strict';

class Random extends require('./base/key.js') {

	generate(p = {}) {
		return this.randomKey(p.length || 16, p.char);
	}

}

module.exports = new Random();

