'use strict'

const { describe, test, expect, jest: _jest, beforeEach } = require("@jest/globals");
const CounterController = require('../../app/controller/CounterController');
const CounterService = require('../../app/service/CounterService');

describe('#CounterController', () => {

    beforeEach(() => _jest.clearAllMocks());
    
    test.todo('should return status 200 and number of hits')
})
