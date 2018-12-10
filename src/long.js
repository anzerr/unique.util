'use strict';

const crypto = require('crypto'),
	config = require('./base/config.js'),
	plain = require('./plain.js');

class Long extends require('./base/key.js') {

	generate() {
		return crypto.createHash(config.crypto.type)
			.update(plain.generate() + config.session)
			.digest('hex');
	}

}

module.exports = new Long();
