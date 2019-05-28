'use strict';

const assert = require('assert'),
	sequence = require('./sequence.js'),
	Seed = require('../src/base/seed.js');

class Run {

	constructor() {
		this.s = new Seed('hello.');
		this.i = 0;
	}

	next() {
		let s = this.s.next();
		assert.equal(s, sequence[this.i]);
		this.i++;
		if (this.i === sequence.length) {
			this.done = true;
		}
	}

}

module.exports = () => {
	let p = new Run();
	while (!p.done) {
		p.next();
	}
	let pool = [];
	for (let i = 0; i < 100; i++) {
		pool.push(new Run());
	}
	while (true) {
		let done = true;
		for (let i in pool) {
			if (!pool[i].done) {
				done = false;
				break;
			}
		}
		if (done) {
			break;
		} else {
			let i = Math.floor(Math.random() * pool.length);
			while (pool[i].done) {
				i = Math.floor(Math.random() * pool.length);
			}
			pool[i].next();
		}
	}
};
