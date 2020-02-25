const reverseString = require('../helpers/reverseString')

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
})

test('String reverse', () => {
    expect(reverseString('HeLLO')).toEqual('olleh')
})