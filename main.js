// import inquirer from "inquirer";
// const questions = [
//     {type: "number", name: "weight", message: "enter your weight in kgs"},
//     {type: "number", name: "height", message: "enter your height in cms" },
// ];
// const calculateBMI = (weight: number, height: number): number => weight/(height*height);
// const answers = await inquirer.prompt(questions);
// console.log(`BMI: ${calculateBMI}`);
// import inquirer from "inquirer";
// let questions = [
//     {type: "number", name: "weight", message: "enter your weight in kgs"},
//     {type: "number", name: "height", message: "enter your height in cms" },
// ];
// let calculateBMI = (weight/(height*height));
// let answers = await inquirer.prompt(questions);
// console.log(`BMI: ${calculateBMI}`);
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { name: "weight", type: "number", message: "enter your weight in kgs" },
    { name: "height", type: "number", message: "enter your height in cms" },
]);
const calculateBMI = (answers.weight / (answers.height ** 2));
console.log(calculateBMI);
