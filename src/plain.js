'use strict';

class Plain extends require('./base/key.js') {

	constructor() {
		super();
		this.count = 0;
		this.prevSecond = 0;
	}

	generate() {
		let now = Math.floor(this.now() * 0.001);
		if (this.prevSecond === now) {
			this.count += 1;
		} else {
			this.prevSecond = now;
			this.count = 0;
		}
		return this.padding((this.randomChar() + now) + this.count, 39) + this.version();
	}

}

module.exports = new Plain();
