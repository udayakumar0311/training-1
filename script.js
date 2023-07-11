let obj = {
    name: "udhay",
    place: "rasipuram.",

    getuser() {
        return `Hello! my name is ${this.name} and i am from ${this.place}`;
    },
}
const nameInput = prompt("What is your name?");
const placeInput = prompt("Where are you from?");

obj.name = nameInput;
obj.place = placeInput;

document.body.innerHTML = obj.getuser();