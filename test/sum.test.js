import { sum, sumAll } from "../src/sum";

test("test sum function sum(1, 2) must be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
})

describe("Test it function", () => {
    it("SUM test", () => {
        expect(sum(20, 30)).toBe(50);
    });
    it.skip("SUM test", () => {
        expect(sum(20, 30)).toBe(40);
    });
    it("SUM test", () => {
        expect(sum(20, 30)).toBe(50);
    });
});

const tableNumber1 = [
    [
        [10, 10, 20], 
        40
    ],
    [
        [1, 2, 3], 
        6
    ],
    [
        [3, 3, 4], 
        10
    ]
];

test.each(tableNumber1)("test 2 sumAll(%s) should %i", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
});


const tableNumber2 = [
    {
        numbers: [10, 10, 20], 
        expected: 40
    },
    {
        numbers: [1, 2, 3], 
        expected: 6
    },
    {
        numbers: [3, 3, 4], 
        expected: 10
    }
];

test.each(tableNumber2)("test sumAll($numbers) should $expected", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
})