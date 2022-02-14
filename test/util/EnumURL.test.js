'use strict'

const { describe, test, expect } = require("@jest/globals");
const EnumURL = require("../../app/util/EnumURL");

describe('#EnumURL', () => {
    test('should return url GETNUMBEROFHITS', () => {
        const expected = 'https://api.countapi.xyz/get/www.ton.com.br/';

        const result = EnumURL.GETNUMBEROFHITS;

        expect(result).toEqual(expected);

    })

    test('should return url UPDATENUMBEROFHITS', () => {
        const expected = 'https://api.countapi.xyz/update/www.ton.com.br?amount=1';

        const result = EnumURL.UPDATENUMBEROFHITS;

       expect(result).toEqual(expected);
    })
})