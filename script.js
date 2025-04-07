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
const headingElement = document.querySelector("#main-heading");
const originalHeadingText = headingElement.textContent;
console.log("Original heading text stored:", originalHeadingText);

headingElement.addEventListener('click', handleHeadingClick);

// 2. Log the selected element object itself
console.log("Selected Heading Element", headingElement);

// 3. Change the text content of the heading element
headingElement.textContent = "Welcome to My Learning Journey";

//Define a function to handle the click event
function handleHeadingClick() {
    console.log("Heading element was clicked!");
  
    // Get the CURRENT text content each time the function runs
    let currentText = headingElement.textContent;
  
    // Check if the current text is the 'clicked' state text
    if (currentText === "You clicked me!") { // Use === for comparison
      // If it is, change it back to the original text we stored
      headingElement.textContent = originalHeadingText;
      headingElement.style.backgroundColor = '';
      console.log("Heading style reverted");
    } else {
      // Otherwise (if it's the original text), change it to the 'clicked' state
      headingElement.textContent = "You clicked me!";
      headingElement.style.backgroundColor = 'lightcoral';
      console.log("Heading Style Changed");
    }
  }


let mySkills = ["HTML", "CSS", "Git", "JavaScript Basics"];
console.log("All of my skills:", mySkills);
console.log("First Skill:", mySkills[0]);
console.log("No. of skills", mySkills.length);
console.log("Last Skill:", mySkills[mySkills.length-1]);

mySkills[3] = "JavaScript"
console.log("All of my skills:", mySkills);
console.log("First Skill:", mySkills[0]);
console.log("No. of skills", mySkills.length);
console.log("Last Skill:", mySkills[mySkills.length-1]);


for (let i = 0; i < mySkills.length; i = i+1){
  console.log("Skill #" + (i + 1) + ":" + mySkills[i]);
}
console.log("--- End of List ---");

mySkills.forEach(function(skill){
  console.log("*" + skill);
});

let emptyThing = {};

const userProfile = {
  name: "Alice",
  age: 30,
  isAdmin: false,
  topics: ["AI", "Ethics"],
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
}

console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile.topics[0]);
console.log(userProfile.address.city);

console.log(userProfile['isAdmin']);
let propertyToAccess = 'name';
console.log(userProfile[propertyToAccess])

userProfile.isAdmin = true;
userProfile.age = 30;
userProfile.country = "USA";
userProfile['Favorite Color'] = 'Blue';

///Practice

const myInfo = {
  fullName: "Junyoung Jung",
  goal: "Becoming Full-Stack & PM",
  learningSince: 2025,
  currentSkills: mySkills,
  isCodingNow: true
}

console.log(myInfo);
console.log(myInfo.fullName);
console.log(myInfo['currentSkills']);
console.log(myInfo.currentSkills[2]);

myInfo.location = "Seoul, South Korea";
myInfo.isCodingNow = false

console.log(myInfo);

function createGreeting(userName){
  const message = "Hello and welcome, " + userName + "!";
  return message
}

function calculatingExperience(startYear, currentYearParam) {
  const years = currentYearParam - startYear;
  return years;
}

const greetingMessage = createGreeting(myName);
console.log(greetingMessage);

const yearsExperience = calculatingExperience(myInfo.learningSince, currentYear);
console.log("Approximate years learning", yearsExperience);


const skillsListElement = document.querySelector('#skills-section ul');
skillsListElement.innerHTML = '';

mySkills.forEach(skill => {
  // V-- PROBLEM IS HERE --V
  const listItemHTML = `<li>${skill}</li>`; // Using single quotes ' '

  skillsListElement.innerHTML += listItemHTML;
});

const allSkillItems = document.querySelectorAll('#skills-section li');

allSkillItems.forEach(item => {
  console.log("Styling item:", item.textContent);

  item.style.color = 'darkslateblue';
})

console.log("Finished styling all list items");


const todoInput = document.querySelector('#todo-input');
const addTodoButton = document.querySelector('#add-todo-btn');
const todoListUL = document.querySelector('#todo-list')

console.log('Selected Elements:', todoInput, addTodoButton, todoListUL);

addTodoButton.addEventListener('click', addTask);

function addTask(){
  const taskText = todoInput.value.trim();
  console.log("Button clicked, task text:", taskText);

  if (taskText !== ''){

    const newListItem = document.createElement('li'); //create new list item element
    newListItem.textContent = taskText; //set text content of new <li> to the task text

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', function(){
      newListItem.remove();
      console.log("Removed task:", taskText);
    })

    newListItem.appendChild(deleteButton);


    newListItem.addEventListener('click', function(){
      newListItem.classList.toggle('completed');
      console.log("Toggle complete status for:", newListItem.textContent);
    });

    todoListUL.appendChild(newListItem);
    todoInput.value = '';

    console.log("Task added to the list.");

  } else{
    console.log("Task input is empty, not adding.");
    alert("Please enter a task!");
  }
}