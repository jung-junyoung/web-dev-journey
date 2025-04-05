console.log("Hello from script.js!")

const myName = "Junyoung Jung";
const currentGoal = "Learning JavaScript variables";
const currentYear = 2025;

console.log("My Name:", myName);
console.log("My Goal:", currentGoal);
console.log("Year:", currentYear);

console.log("Hello, my name is" + myName + " and I am currently" + currentGoal + " in" + currentYear + ".");

// --- DOM Manipulation ---
// 1. Select the heading element using its ID
const headingElement = document.getElementById('main-heading');
headingElement.addEventListener('click', handleHeadingClick);

// 2. Log the selected element object itself
console.log("Selected Heading Element", headingElement);

// 3. Change the text content of the heading element
headingElement.textContent = "Welcome to My Learning Journey";

//Define a function to handle the click event
function handleHeadingClick(){
    console.log("Heading element was clicked!");
}