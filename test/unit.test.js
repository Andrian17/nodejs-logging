
test("Truthiness", () => {
    let value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();
    
    value = undefined;
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();

    value = "EKO";
    expect(value).toBeTruthy();
});


test("Numbers matchers", () => {
    let value = 5;
    expect(value).toBeGreaterThan(2);
    expect(value).toBeLessThan(7);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThanOrEqual(8);
    expect(value).toBeLessThanOrEqual(5);
    expect(value).toBe(5);
});

test("String matchers", () => {
    let value = "Andrian";
    expect(value).toBe("Andrian");
    expect(value).toMatch(/rian/);
});

test("Arrays matchers", () => {
    const names = ["Andrian", "Cimen", "Test"];
    expect(names).toContain("Cimen");
    expect(names).toEqual(["Andrian", "Cimen", "Test"]);

    const person = [
        {
            firstName: "Andrian"
        },
        {
            lastName: "Cimen"
        }
    ];

    expect(person).toContainEqual({
        firstName: "Andrian"
    });
    expect(person).toEqual([
        {
            firstName: "Andrian"
        },
        {
            lastName: "Cimen"
        }
    ])
});

