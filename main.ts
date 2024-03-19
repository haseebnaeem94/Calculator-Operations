// Simple BMI Calculator

let weight = 70;
let height = 175;
let bmi = weight/ (height*height);
console.log(`Haseeb your BMI is ${bmi}`);


// BMI Calculator by using Inquirer

import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {name: "weight", type: "number", message: "enter your weight in kgs"},
    {name: "height", type: "number", message: "enter your height in cms"},
]);
const calculateBMI = (answers.weight/(answers.height**2));
console.log(calculateBMI);



//Simple Addition calculator that add two numbers


import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "enter your first number",
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "enter your second number",
});
let total: number = input1.num1 + input2.num2;
console.log(total);
 


// Calculator by using Inquirer that can perform addition, subtraction, multiplication and division operation.

import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {name: "firstNumber", type: "number", message: "enter firstNumber"},
    {name: "secondNumber", type: "number", message: "enter secondNumber"},
    {name: "operator", type: "list", message: "selet operator to perform operation",
    choices: ["Addition", "subtraction", "multiplication", "division"],
},
]);
if(answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}else if(answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}else if(answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}else if(answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}else{
    console.log("please select valid operator");
}


// Simple Percentage calculator that can calculate percentage of a student as per his obtained marks.



import inquirer from "inquirer";
let obtainMarks = await inquirer.prompt([
    {name: "num1", type: "number", message: "enter your obtain marks"},
]);
let totalMarks = await inquirer.prompt([
    {name: "num2", type: "number", message: "enter your total marks"},
]);
let percentage: number = (obtainMarks.num1/totalMarks.num2)*100;
console.log(percentage);