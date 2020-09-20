const getDb = require('../utils/database');

class User {
    constructor(email, password, firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    async signUp() {
        const db = await db.collection('users').insertOne(this);
        return true;
    }
}

exports.User = User;