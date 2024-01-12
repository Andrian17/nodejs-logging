import { helloTrouble } from "../src/hello";

describe("Test helloTrouble", () => {
    it.concurrent("hello trouble success", () => {
        expect(helloTrouble("Andrian")).toBe("Hello Andrian");
    });
    it.concurrent.failing("hello trouble error", () => {
        helloTrouble();
    });
    it.concurrent("hello trouble error", () => {
        expect(() => helloTrouble(null)).toThrow();
    });
});