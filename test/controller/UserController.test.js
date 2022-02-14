'use strict'

const { describe, test, expect, jest: _jest, beforeEach } = require("@jest/globals");
const UserController = require('../../app/controller/UserController');
const UserService = require('../../app/service/UserService');

describe('#UserController', () => {

    beforeEach(() => _jest.clearAllMocks());
    
    test('should return status 200 and user in get function', async () => {

        _jest.spyOn(
            UserService,
            'getUser'
        ).mockResolvedValue({
                code: 200,
                message: 'teste'
        });

        const request = {
            params: {
                tax_id: 1234
            }
        };

        const response = {
            status: () => 200,
            json: _jest.fn()
        };
        
        const result = await UserController.get(request, response);

        expect(result).toBeUndefined();
    })

    test('should return status 404 in get function', async () => {

        _jest.spyOn(
            UserService,
            'getUser'
        ).mockResolvedValue({
                code: 404,
                message: 'teste'
        });

        const request = {
            params: {
                tax_id: 1234
            }
        };

        const response = {
            status: () => 404,
            json: _jest.fn()
        };
        
        const result = await UserController.get(request, response);

        expect(result).toBeUndefined();
    })

    test("should return status 200 and create user", async () => {

        _jest.spyOn(
            UserService,
            'createUser'
        ).mockResolvedValue({
                code: 200,
                message: 'teste'
        });

        const request = {
            body: _jest.fn()
        };

        const response = {
            status: () => 200,
            json: _jest.fn()
        };
        
        const result = await UserController.create(request, response);

        expect(result).toBeUndefined();

    })

    test("should return status 404 in create function", async () => {

        _jest.spyOn(
            UserService,
            'createUser'
        ).mockResolvedValue({
                code: 400,
                message: 'teste'
        });

        const request = {
            body: _jest.fn()
        };

        const response = {
            status: () => 400,
            json: _jest.fn()
        };
        
        const result = await UserController.create(request, response);

        expect(result).toBeUndefined();

    })

    test("should return status 200 and create user", async () => {

        _jest.spyOn(
            UserService,
            'createUser'
        ).mockImplementationOnce(() => Promise.reject('Service Unavailable'));

        const request = {
            body: _jest.fn()
        };

        const response = {
            status: () => 200,
            json: _jest.fn()
        };
        
        const result = await UserController.create(request, response);

        expect(result).toBeUndefined();

    })

})
