const BaseDatabase = require('./base-database')
const User = require('../models/user')

class UserDatabase extends BaseDatabase {
    
    async findByName(name) {
        const objects = await this.load()

        return objects.find(o => o.username == name)
    }
}

module.exports = new UserDatabase(User)