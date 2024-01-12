
export const person = (person) => {
    return {
        name: person.name,
        age: person.age,
        address: person.address
    }
}

export const sayHallo = (name) => {
    console.log(`Hallo ${name}`);
}

export const helloTrouble = (name) => {
    if (name) {
        return `Hello ${name}`;
    } else {
        throw new Error("Name is required");
    }
}