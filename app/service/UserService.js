'use strict'

const userSchema = require('../schema/User');

class UserService {
    constructor(){}

    async createUser(userfactory){

        try {
            const user = userfactory;
        
            const searchUser = await userSchema.findOne({ email: user.email });
            
            if(searchUser){
                return {
                    code: 400,
                    message: 'User already exists'
                };
            }
    
            await userSchema.create(user);

            return {
                code: 201,
                message: 'Created success'
            };
    
        } catch (error) {
            if (error.name === 'ValidationError') {
                const message = Object.values(error.errors).map(err => err.message);
                return {
                    code: 400,
                    message
                };
            }

            throw new Error(error);
        }
    }
}

module.exports = new UserService();