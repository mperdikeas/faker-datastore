const faker = require('Faker');


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
        this.dateOfBirth = dateOfBirth;
        this.address     = address;
    }
}

class FakeDataStore {
    
    constructor(n) {
        this.n = n;
        this.data  = [];
    }

    getSize() {
        return this.n;
    }

    get(idx) {
        if ((idx < 0) || (idx >= this.n))
            return null;
        if (!this.data[idx]) {
            const address = new Address(faker.Address.usState()
                                        , faker.Address.city()
                                        , faker.Address.streetName()
                                        , faker.Address.streetAddress());
            const person = new Person(faker.Name.firstName()
                                      , faker.Name.lastName()
                                      , faker.Internet.email()
                                      , new Date(faker.Date.recent(365*100))
                                      , address);
            this.data[idx] = person;
        }
        if (!this.data[idx])
            throw new Error();
        return this.data[idx];
    }


}


module.exports = FakeDataStore;
