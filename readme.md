## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006

### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---
# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9 

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST 

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK 


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?
In JavaScript, var, let, and const are all used to declare variables, but they differ mainly in scope, hoisting behavior, and whether the value can be changed.

var is the oldest way of declaring variables. It is function-scoped, meaning it is accessible anywhere within the function where it is declared. It is hoisted to the top of its scope and initialized as undefined, which can sometimes lead to unexpected results. Variables declared with var can also be redeclared and reassigned without error.

let was introduced in ES6 to fix some of the problems with var. It is block-scoped, so it only exists within the block ({ ... }) where it is declared. Like var, it is hoisted, but it is not initialized automatically. If you try to access it before declaration, you get a ReferenceError (this is called the Temporal Dead Zone). A let variable can be reassigned, but not redeclared in the same scope.

const is also block-scoped, like let. The difference is that you must assign a value immediately when you declare it, and you cannot reassign it later. However, if the value is an object or an array, you can still modify its contents — you just can’t change the binding to a new object or array.

#### 2) What is the difference between map(), forEach(), and filter()? 
1. forEach()

Purpose: To loop through each element in an array and perform some operation.

Return: Nothing (it always returns undefined).

Use case: When you just want to do something with each element (like printing, updating DOM, pushing values to another array).

Example idea: Think of forEach() as a worker who checks every item in a list and performs an action, but doesn’t hand you back a new list.

2. map()

Purpose: To transform each element of an array into something else.

Return: A new array with the transformed elements (same length as the original).

Use case: When you want to create a new version of your array with modified values.

Example idea: Imagine map() as a machine on a factory line: you feed items in, it transforms them, and gives you a new set of items.

3. filter()

Purpose: To pick out elements from an array that match a condition.

Return: A new array containing only the elements that passed the test (could be smaller or empty).

Use case: When you want to keep only certain elements based on some condition.

Example idea: Think of filter() as a sieve: you pour everything in, and only the items that match the rule fall through.

#### 3) What are arrow functions in ES6?
An arrow function is a special syntax for writing functions using the => symbol.
It is mainly used for concise code and for handling the this keyword differently compared to regular functions.

#### 4) How does destructuring assignment work in ES6?
Destructuring assignment in ES6 is a feature that lets you unpack values from arrays or properties from objects and assign them to variables in a single, clean statement.

1. Array Destructuring

You can extract values from arrays by their position:

const numbers = [10, 20, 30];

// Destructure
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


2. Object Destructuring

You can pull values out of objects by their property names:

const person = { name: "Rivu", age: 22 };

// Destructure
const { name, age } = person;

console.log(name); // "Rivu"
console.log(age);  // 22



3. Nested Destructuring

You can go deep inside objects/arrays:

const user = {
  id: 1,
  profile: { username: "tanvir", email: "rivu@email.com" }
};

const { profile: { username } } = user;
console.log(username); // "tanvir"


4. Destructuring in Function Parameters

Very common in modern JavaScript:

function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Rivu", age: 22 }); // Hello Rivu, age 22




#### 5) Explain template literals in ES6. How are they different from string concatenation?

In ES6, template literals are a new way to work with strings. They’re enclosed in backticks (`) instead of quotes (' or ").

✨ Features of Template Literals

String Interpolation

You can embed variables or expressions directly inside a string using ${...}.

const name = "Rivu";
const age = 22;

// Template literal
const intro = `My name is ${name} and I am ${age} years old.`;

console.log(intro);

Multi-line Strings

With template literals, you can write strings over multiple lines without using \n or +.

const msg = `This is line one
This is line two
This is line three`;

console.log(msg);


Expression Evaluation

You can insert not just variables, but also any expression inside ${}.

const a = 10, b = 20;
console.log(`Sum = ${a + b}`); // Sum = 30


## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---