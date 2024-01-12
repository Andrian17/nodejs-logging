import { RequestName } from "../src/async_test";
import { sum } from "../src/sum";


beforeAll(() => {
    console.log("Before test");
})

afterAll( async() => {
    const result = await RequestName("Andrian");
    console.log(result);
})

test("Run sum test", () => {
    expect(sum(4, 5)).toBe(9);
})