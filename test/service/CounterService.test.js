'use strict'

const { describe, test, expect, jest: _jest } = require("@jest/globals");
const axios = require("axios");
const CounterService = require("../../app/service/CounterService");

describe('#CounterService', () => {
    test('should updated number of hits', async () => {
        _jest.spyOn(
            axios,
            'get'
        ).mockResolvedValue({
            message: 'updated success'
        })

        const result = await CounterService.updateNumberOfHits();
        
        expect(result).toEqual({ message: 'updated success' });
    })

    test('should return number of hits', async () => {
        _jest.spyOn(
            axios,
            'get'
        ).mockResolvedValue({
            data: { value: 62 }
        })

        const result = await CounterService.getNumberOfHits();

        expect(result).toEqual({ value: 62 });
    })
})
