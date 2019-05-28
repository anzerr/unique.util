
const config = require('./config.js');

class Util {

	flatten(obj, depth) {
		let result = [], typ = (typeof obj);
		if (depth && typ === 'object') {
			for (let i in obj) {
				try {
					result.push(this.flatten(obj[i], depth - 1));
				} catch (e) {
					// nothing?
				}
			}
		}
		if (result.length) {
			return result;
		}
		return typ === 'string' ? obj : obj + '\0';
	}

	mixkey(seed, key) {
		let stringseed = String(seed), sthisar = null, j = 0;
		while (j < stringseed.length) {
			key[config.mask & j] = config.mask & ((sthisar ^= key[config.mask & j] * 19) + stringseed.charCodeAt(j++));
		}
		return this.toString(key);
	}

	toString(a) {
		return String.fromCharCode.apply(0, a);
	}

}

module.exports = new Util();
