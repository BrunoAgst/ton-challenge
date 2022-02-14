'use strict'

const { describe, test, expect, jest: _jest, beforeEach } = require("@jest/globals");
const CounterController = require("../../app/controller/CounterController");
const CounterService = require("../../app/service/CounterService");

describe('#CounterController', () => {

    beforeEach(() => _jest.clearAllMocks());
    
    test('should return status 200 and number of hits', async () => {

        _jest.spyOn(
            CounterService,
            'getNumberOfHits'
        ).mockResolvedValue({
            value: 200
        });

        const request = {};

        const response = {
            status: () => 200,
            json: _jest.fn()
        };

        const result = await CounterController.get(request, response);
        
        expect(result).toBeUndefined();
    })

    test('should return error', async () => {
        _jest.spyOn(
            CounterService,
            'getNumberOfHits'
        ).mockImplementationOnce(() => Promise.reject('Service Unavailable'));
        
        const request = {
            body: _jest.fn()
        };

        const response = {
            status: () => 503,
            json: _jest.fn()
        };
        
        const result = await CounterController.get(request, response);

        expect(result).toBeUndefined();

    })

    test('should return status 200 and number of hits', async () => {

        _jest.spyOn(
            CounterService,
            'updateNumberOfHits'
        ).mockResolvedValue({
            value: 200
        });

        const request = {};

        const response = {
            status: () => 200,
            json: _jest.fn()
        };

        const result = await CounterController.update(request, response);
        
        expect(result).toBeUndefined();
    })

    test('should return error', async () => {
        _jest.spyOn(
            CounterService,
            'updateNumberOfHits'
        ).mockImplementationOnce(() => Promise.reject('Service Unavailable'));
        
        const request = {
            body: _jest.fn()
        };

        const response = {
            status: () => 503,
            json: _jest.fn()
        };
        
        const result = await CounterController.update(request, response);

        expect(result).toBeUndefined();

    })
})
