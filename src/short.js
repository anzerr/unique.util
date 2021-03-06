'use strict';

const Seed = require('./base/seed.js'),
	config = require('./base/config.js');

class Short extends require('./base/key.js') {

	constructor() {
		super();
		this.count = 0;
		this.prevSecond = 0;
		this.seed = new Seed();
		this.alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
		this.shuffled = null;
	}

	shuffle() {
		if (!this.shuffled) {
			let char = this.alphabet.split(''), out = [];

			while (char.length > 0) {
				out.push(char.splice(Math.floor(this.seed.next() * char.length), 1)[0]);
			}

			return this.shuffled = out.join('');
		}
		return this.shuffled;
	}

	encode(number) {
		let str = '', i = 0, done = false, list = this.shuffle();

		while (!done) {
			str = str + list[((number >> (4 * i)) & 0x0f) | (this.randomByte() & 0x30)];
			done = (number < (Math.pow(16, i + 1)));
			i++;
		}

		return (str);
	}

	generate() {
		let str = '', now = Math.floor(this.now() * 0.001);
		if (this.prevSecond === now) {
			this.count += 1;
		} else {
			this.prevSecond = now;
			this.count = 0;
		}

		str += this.encode(config.uniqueKey.version);
		str += this.encode(1 % 16);
		if (this.count > 0) {
			str += this.encode(this.count);
		}
		str += this.encode(now);

		return this.padding(str, 12);
	}

}

module.exports = new Short();


