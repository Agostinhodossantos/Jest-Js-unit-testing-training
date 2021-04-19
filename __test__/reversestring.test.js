const reverseString = require("../reversestring")

test('reversesString function exists', () => {
    expect(reverseString).toBeDefined();
})

test('String reverse ', () => {
    expect(reverseString('hello')).toEqual('olleh')
})


test('String reverse with uppercase', () => {
    expect(reverseString('hello')).toEqual('olleh')
})
