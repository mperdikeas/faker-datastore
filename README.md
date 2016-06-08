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

The datastore hosts **Person** objects according to the following types:

```javascript
class Address {
    constructor(usState, city, streetName, streetAddress) {
        this.usState       = usState;
        this.city          = city;
        this.streetName    = streetName;
        this.streetAddress = streetAddress;
    }
}


class Person {
    constructor(fname, lname, email, dateOfBirth, address) {
        this.fname       = fname;
        this.lname       = lname;
        this.email       = email;
        this.dateOfBirth = dateOfBirth; // this is an actual Date object
        this.address     = address;
    }
}
```




## Tests

    // not yet implemented

## Contributing



## Release History

* 0.1.0 &nbsp;&nbsp;&nbsp; Initial release
* 0.1.1 &nbsp;&nbsp;&nbsp; fixed sizing bug
* 2.0.0 &nbsp;&nbsp;&nbsp; dateOfBirth is now an actual Date object
