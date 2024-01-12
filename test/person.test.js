import { person } from "../src/hello";

test("Check Person function", () => {
    const me = {
        name: "Andrian",
        age: 22,
        address: "Bima"
    }
    expect(person({
        name: "Andrian",
        age: 22,
        address: "Bima"
    })).toEqual(me);
});