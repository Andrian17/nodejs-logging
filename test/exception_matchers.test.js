import { MyException, callMe } from "../src/excetion_test";

test("exception matchers", () => {
    expect(() => callMe("Andrian")).toThrow();
    expect(() => callMe("Andrian")).toThrow(MyException);
    expect(() => callMe("Andrian")).toThrow("Exception happen");
    expect(() => callMe("Andrian")).toThrow();
});

test("exception not matcher", () => {
    expect(() => callMe("Cimen")).not.toThrow();
    expect(callMe("Cimen")).not.toBe("Yes");
    expect(callMe("Cimen")).not.toBe("OK2");
    expect(() => callMe("Cimen")).not.toThrow(MyException);
    expect(() => callMe("Cimen")).not.toThrow("Excp");
    // expect(callMe("Cimen")).toBe("OK");
});