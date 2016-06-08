# faker-datastore
thin wrapper of faker module to simulate a datastore with consistent results

To use it:

```javascript
const FakeDataStore = require('faker-datastore');
const ds = new FakeDataStore(100);
ds.getSize(); // 100
ds.get(-1); // null
ds.get(100); // null
ds.get(13); // consistently fetches the same piece of data simulating a datastore
```

const 


## Tests

    // not yet implemented

## Contributing



## Release History

* 0.1.0 &nbsp;&nbsp;&nbsp; Initial release
* 0.1.1 &nbsp;&nbsp;&nbsp; fixed sizing bug
