const functions = require("../functions");

// test('Adds 2 + 2 to equal 4', () => {
//      expect(functions.add(2, 2)).toBe(4)
// })

// test("Adds 2 + 2 to NOT equal 5", () => {
//     expect(functions.add(2, 4)).not.toBe(5)
// })

test("Should be null", () => {
    expect(functions.isNull()).toBeNull()
})

test("Should be falsy", () => {
    expect(functions.checkValue(3)).not.toBeFalsy()
})


test("User Should be Brad Traversy object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad", 
        lastName: "Traversy" 
    })
})

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex

test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i)
})

// Arrays 

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'],
    expect(usernames).toContain('admin')
})

// Working with async data
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1)
//      functions.fetchUser().then(data => {
//         expect(data.name).toEqual("Leanne Graham")
//     })
// })


// Async Await 

test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham")
})
