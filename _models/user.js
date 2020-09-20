const getDb = require('../utils/database').getDb;

class User {
    constructor(email, password, firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    async signUp() {

        try {

            var db = getDb();
            const result = await db.collection('users').insertOne(this);
            return true;
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = User;