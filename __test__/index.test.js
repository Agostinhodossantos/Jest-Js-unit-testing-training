const hello = require("../index")

test('hello from index', () => {
    expect(hello()).toBe("hello world")
})