'use strict';

class Seed {

	constructor(seed) {
		this._seed = seed || 1;
	}

	next() {
		this._seed = (this._seed * 9301 + 49297) % 233280;
		return (this._seed / (233280.0));
	}

	setSeed(seed) {
		this._seed = seed;
		return (this);
	}

}

module.exports = Seed;
