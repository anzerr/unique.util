'use strict';

const Seed = require('./base/seed.js'),
	config = require('./base/config.js');

class SeedKey extends require('./base/key.js') {

	generate(s) {
		return new Seed(s || config.session);
	}

}

module.exports = new SeedKey();

