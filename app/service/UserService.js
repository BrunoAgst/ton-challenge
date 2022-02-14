'use strict'

const userSchema = require("../schema/User");

class UserService {
    constructor(){}

    async getUser(tax_id){
        const user = await userSchema.findOne({ tax_id });
        if(!user) {
            return {
                code: 404,
                message: 'Not Found'
            };
        }

        return {
            code: 200,
            message: user
        };
    }

    async createUser(userfactory){

        try {
            const user = userfactory;
        
            const searchUser = await userSchema.findOne({ tax_id: user.tax_id });

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
                return {
                    code: 400,
                    message: Object.values(error.errors).map(err => err.message)
                };
            }

            throw new Error(error);
        }
    }
}

module.exports = new UserService();