const mongodb = require('mongodb');

const mongodbClient = mongodb.MongoClient;

const URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

let _db;
const mongoConnect = async (callBack) => {
    try {
        const result = await mongodbClient.connect(URL);
        _db = result.db('financialAccounting');
        callBack(result);
    } catch (err) {
        console.log('Error in connecting Database...!\n', err);
    }
}

const getDb = () => {
    if(_db) {
        return _db;
    } else {
        console.log('No Db Found!');
    }
}

module.exports = mongoConnect;
module.exports.getDb = getDb;