'use-strict'

const { describe, test, expect } = require("@jest/globals");
const UserFactory = require("../../app/factory/UserFactory");

describe('#UserFactory', () => {
    test('should return request user formatted', () => {
        
        const payload = {
            "name": "Bruno Augusto",
            "age": 23,
            "email": "bruno@teste.com",
            "tax_id": "12345"
        };

        const result = new UserFactory(payload).RequestFactory();

        const expected = {
            name: "Bruno Augusto",
            age: 23,
            email: "bruno@teste.com",
            tax_id: "12345"
        };

        expect(result).toEqual(expected);
    })

    test('should return request user formatted', () => {
        
        const payload = {
            "name": "Bruno Augusto",
            "age": 23,
            "email": "bruno@teste.com",
            "tax_id": "12345"
        };

        const result = new UserFactory(payload).ResponseFactory();

        const expected = {
            name: "Bruno Augusto",
            age: 23,
            email: "bruno@teste.com",
            tax_id: "12345"
        };

        expect(result).toEqual(expected);
    })
})