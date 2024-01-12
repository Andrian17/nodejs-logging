
export const listPeople = (people) => {
    people.forEach(person => {
        console.log(`name: ${person.name}, age: ${people.age}`);
    });
}

