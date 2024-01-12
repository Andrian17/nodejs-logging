import { listPeople } from "../src/list_people";

describe("Test aja", () => {
    test("List people 1", () => {
        const people = [
            {
                name: "Andrian",
                age: 22
            },
            {
                name: "Cimen",
                age: 22
            }
        ];
        expect(listPeople(people)).not.toBe("Ok");
    });
});