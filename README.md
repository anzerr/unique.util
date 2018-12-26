
### `Intro`
unique key generation library pulled from Singularity

#### `Install`
``` bash
npm install --save git+ssh://git@github.com/anzerr/uKey.library.git
```

### `Example`

``` javascript
const key = require('unique.util');
console.log(key.long());
console.log(key.number());
console.log(key.random());
console.log(key.plain());
console.log(key.seed(1).next());
console.log(key.short());
console.log(key.simple());
```

