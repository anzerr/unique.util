
### `Intro`
unique key generation util

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/unique.util.git
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

