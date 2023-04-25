

class DB {
    constructor(db){
        this.db = db;
    }

    getDepart = () => 
    
this.db.promise().query('SELECT * FROM department').then(([data])=>console.table(data));
};

const dbInstance = new DB(connection);
module.exports = dbInstance;
