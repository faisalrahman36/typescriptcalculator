import inquirer from "inquirer";
import {add,sub,myltiply,divide} from "./calculator.js"
async function calculator(){

let answer:number=0;
let choice=1; 
while(choice!=0){

let choice1 = await inquirer.prompt([{
        name: "choice",
        type: "number",
        message: "Calculator Menu \n 1- Add \n 2- Subtract \n 3-Multiply \n 4-Divide \n 0- Exit \n Enter your choice:"}
    ]);
    choice=choice1.choice
if(choice!=0){
let num1 = await inquirer.prompt([{
    name: "number1",
    type: "number",
    message: "Enter the first number:"}
]);

let num2 = await inquirer.prompt([{
    name: "number2",
    type: "number",
    message: "Enter the second number:"}
]);

switch (choice) {
    case 1:
        console.log(add(num1.number1,num2.number2));
        break;
    case 2:
        console.log(sub(num1.number1,num2.number2));
        break;
    case 3:
        console.log(myltiply(num1.number1,num2.number2));
        break;
    case 4:
        console.log(divide(num1.number1,num2.number2));
        break;
    case 0:
        console.log("Exiting...");
        break;
    
    default:
        console.log("Invalid choice.");
        break;
}

}
}
}

calculator();