// Functions

// Functions provide re-usable code

// Methods = Built-in Functions!

// Function Declaration Syntax

/* function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 6));
 */

// What if we provide only one parameter but the function needs 2

/* function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

console.log(sum(2)); */

// How top handle the problem

/* function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}

console.log(sum(2));
 */

// Another example of function

/* function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("ismail.taher@yamil.com"));
 */

// Anonymous Function

const getUserNameByEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameByEmail("user@github.com"));

// Arrow Functions have shorter syntax than normal functions

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("iSmAiL"));
