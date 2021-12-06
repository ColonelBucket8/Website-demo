let userInput = prompt("What would you like to do?");
const todos = [];

while (userInput !== "quit" && userInput !== "q") {
    if (userInput === "list") {
        console.log("*************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*************")
    } else if (userInput === "new") {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (userInput === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    userInput = prompt("What you like to do?");
}

console.log("You have successfully quit");
