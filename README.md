
### `Intro`
Unique key generation util.

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/unique.util.git
npm install --save @anzerr/unique.util
```

### `Example`

``` javascript
const key = require('unique.util');
console.log(key.long());
console.log(key.number());
console.log(key.random());
console.log(key.plain());
console.log(key.seed(1).next());
console.log(key.short()); // crypto safe?
console.log(key.simple()); // not crypto safe
```

