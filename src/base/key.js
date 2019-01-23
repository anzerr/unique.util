'use strict';

const config = require('./config.js'),
	crypto = require('crypto');

const ALPHA_NUM = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';

class Key {

	randomChar(charList) {
		let possible = charList || ALPHA_NUM;
		return possible[this.random(possible.length - 1)];
	}

	randomKey(length, charList) {
		let text = '';

		for (let i = 0; i < length; i++) {
			let k = this.randomChar(charList);
			if (!k) {
				throw new Error('random char is random how?');
			}
			text += k;
		}
		if (length !== text.length) {
			throw new Error('randomKey is wrong expected length how?');
		}

		return (text);
	}

	padding(str, length) {
		return str + (((length - str.length) > 0) ? this.randomKey(length - str.length) : '');
	}

	random(max) {
		let n = (this.randomByte() / 255);
		return max ? Math.floor(n * max) : n;
	}

	randomByte() {
		return crypto.randomBytes(1)[0];
	}

	now() {
		return Date.now() - config.uniqueKey.time;
	}

	version() {
		return config.uniqueKey.version;
	}

}

module.exports = Key;

