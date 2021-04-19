let tiny = require('tiny-json-http')
let data = require('@begin/data')
let sandbox = require('@architect/sandbox')


// setup and teardown of @architech/ sandbox to execute the test cases
beforeAll(async () => {
    await sandbox.start({quiet: true})
})

afterAll(async () => {
    await sandbox.end()
})

// test that GET request completes without error
test('get /', async () => {
    let url = 'http://localhost:3333'
    await tiny.get({url})
})


describe(" test that you write data with @begin/ data library", () => {
    test('data.set', async () => {
        let result = await data.set({table: 'tmp'})
        expect(result.table).toBe('tmp')
        console.log(result)
    })
})

describe("test that you can read data with @begin/data library", async () => {
    let result = await data.set({table: 'tmp'})
    expect(result.length).toBe(1)
    console.log(result)
})