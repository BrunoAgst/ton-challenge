'use strict'

const { describe, test, expect, jest: _jest, beforeEach, beforeAll } = require("@jest/globals");

const UserService = require("../../app/service/UserService");
const UserSchema = require("../../app/schema/User");
const { createUser } = require("../../app/service/UserService");

describe("#UserService", () => {
    
    beforeAll(() => _jest.clearAllMocks());

    test("should return getUser", async () => {

        _jest.spyOn(
            UserSchema,
            'findOne'
        ).mockResolvedValue({
            "name": "Bruno Augusto",
            "age": 25,
            "email": "bruno@teste.com",
            "tax_id": "12345"
        });

        const tax_id = '12345';

        const result = await UserService.getUser(tax_id);
        
        const expected = {
            code: 200,
            message: {
              name: 'Bruno Augusto',
              age: 25,
              email: 'bruno@teste.com',
              tax_id: '12345'
            }
        };

        expect(result).toEqual(expected);

    })

    test("should return getUser not found", async () => {

        _jest.spyOn(
            UserSchema,
            'findOne'
        ).mockImplementation(() => { return null });

        const tax_id = '12345';

        const result = await UserService.getUser(tax_id);
        
        const expected = { code: 404, message: 'Not Found' };

        expect(result).toEqual(expected);
    })

    test("should return user already exists in createUser", async () => {
    
        _jest.spyOn(
            UserSchema,
            'findOne'
        ).mockImplementation(() => { 
            return {          
                name: 'Bruno Augusto',
                age: 25,
                email: 'bruno@teste.com',
                tax_id: '12345'
            }
        });

        const user = {
            name: "Bruno Augusto",
            age: 25,
            email: 'bruno@teste.com',
            tax_id: '12345'
        };

        const result = await createUser(user);
        
        const expected = { code: 400, message: 'User already exists' };

        expect(result).toEqual(expected);

    })

    test('should return created success', async () => {

        _jest.spyOn(
            UserSchema,
            'findOne'
        ).mockImplementation(() => { return null });
        
        _jest.spyOn(
            UserSchema,
            'create'
        ).mockResolvedValue();

        const user = {
            name: "Bruno Augusto",
            age: 25,
            email: 'bruno@teste.com',
            tax_id: '12345'
        };

        const result = await createUser(user);

        const expected = { code: 201, message: 'Created success' };

        expect(result).toEqual(expected);
    })

    test('should return path required', async () => {

        _jest.spyOn(
            UserSchema,
            'findOne'
        ).mockImplementation(() => { return null });

        _jest.spyOn(
            UserSchema,
            'create'
        ).mockImplementationOnce(() => Promise.reject('Service Unavailable'));

        const user = {
            name: "Bruno Augusto",
            age: 25,
            email: 'bruno@teste.com',
            tax_id: '12345'
        };

        const result = await createUser(user);

        expect(result).toEqual('Service Unavailable');
    })

})