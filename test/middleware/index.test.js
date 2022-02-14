const { describe, test, jest: _jest, expect } = require("@jest/globals");
const { create } = require("../../app/middleware");

describe('#middleware', () => {
    test('should return success', () => {
        const request = {
            body: {
                name: 'Bruno Augusto',
                age: 25,
                email: 'bruno@teste.com',
                tax_id: '12345'
            }
        };

        const next = _jest.fn();
        const response = _jest.fn();

        const result = create(request, response, next);

        expect(result).toBeUndefined();
    })

    test('should return error', () => {
        const request = {
            body: {
                name: 'Bruno Augusto',
                age: 25,
                email: 'bruno@teste.com'
            }
        };

        const next = _jest.fn();
        const response = {
            status: () => 400,
            json: () => { error: "tax_id is required" }
        };

        const result = create(request, response, next);
        expect(result).toBeUndefined();
    })
})