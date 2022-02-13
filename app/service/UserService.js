'use strict'

const userSchema = require('../schema/User');

class UserService {
    constructor(){}

    async createUser(userfactory){
        
        const user = userfactory;

        
        const searchUser = await userSchema.findOne({ email: user.email });
        
        if(searchUser){
            return {
                code: 400,
                message: 'User already exists'
            } 
        }

        return await userSchema.create(user);
    }
}

module.exports = new UserService();