import  { calculate, calculateReturn } from "../src/sum";

test("Test calculate, mock function", () => {
    const callback = jest.fn();

    calculate([10, 20, 30], callback);
    calculate([5, 10, 20], callback);

    expect(callback.mock.calls.length)

    console.log(callback.mock.calls);

    expect(callback.mock.calls[0][0]).toBe(60);
    expect(callback.mock.calls[1][0]).toBe(35);
    expect(callback.mock.calls[1][0]).not.toBe(30);

});

test("Test calculate return, mock function", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    expect(calculateReturn([10, 10, 10], callback)).toBe(40);
    expect(calculateReturn([10, 10, 10], callback)).toBe(80);
    
});

