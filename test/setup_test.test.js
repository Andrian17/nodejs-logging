
import {sum} from '../src/sum'

beforeEach(() => {
    console.log("Before test");
});

afterEach(() => {
    console.log("After test");
})

test("Test setup function", () => {
    expect(sum(2, 3)).toBe(5);
});


test("Test setup function 2", () => {
    expect(sum(2, 3)).not.toBe(6);
});