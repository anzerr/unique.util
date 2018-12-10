'use strict';

const key = require('./index.js'),
	assert = require('assert');

for (let i = 0; i < 10000; i++) {
	assert.notEqual(key.long().match(/[0-9a-zA-Z]{40}/), null);
	assert.notEqual(key.number().match(/[0-9]{40}/), null);
	assert.notEqual(key.random().match(/[0-9a-zA-Z\_\-]{16}/), null);
	assert.notEqual(key.plain().match(/[0-9a-zA-Z\_\-]{39}1/), null);
	assert.equal(key.seed(1).next(), 0.2511917009602195);
	assert.notEqual(key.short().match(/[0-9a-zA-Z\_\-]{12}/), null);
}
