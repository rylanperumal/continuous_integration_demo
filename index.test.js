const sum = require('./index');

test("1 + 2 = 3", test_sum);

function test_sum(){
    expect(sum(1, 2)).toBe(3);
}