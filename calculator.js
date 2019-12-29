/** OVERVIEW: This program represents a basic calculator with operations such as 
 *            addition, subtraction, multiplication, & division. The Snippets 
 *            inside the Google Chrome developer tools was used as the text editor.
 *        
 * Note: This is a just a coding exercise/challenge for "The Complete 2020 Web Development
 *       Bootcamp Course" on Udemy by Angela Yu.
 */


/*************************************************************************************************/
/*                                    Instance Variables                                         */
/*************************************************************************************************/
var number1, number2, num1, num2;
var operator, result;

// Getting inputs from the user
number1 = prompt("Please enter the first number.");
number2 = prompt("Please enter the second number.");
operation = prompt("Please enter the operator.");

// Calculating the result
num1 = parseInt(number1, 10);
num2 = parseInt(number2, 10);
result = calculator(num1, num2, operation);

// Printing out the result
alert("The answer is " + result + ".");


/*************************************************************************************************/
/*                                         Methods                                               */
/*************************************************************************************************/

/** This method takes 2 operands and perfroms the specified operation
 * 
 * @param     num1            Some particular number
 * @param     num2            Some particular number
 * @param     operator        Some particular operator
 */
function calculator(num1, num2, operator){
  var operationToPerfrom = operator.toLowerCase();

  switch(operationToPerfrom){
    case "add":
      return addition(num1, num2);
      break;

    case "subtract":
      return subtraction(num1, num2);
      break;

    case "multiply":
      return multiplication(num1, num2);
      break;

    case "divide":
      return division(num1, num2);
      break;

  }
}// End of calculator()

/** This method perfroms addition between two numbers
 * 
 * @param     num1        Some particular number
 * @param     num2        Some particular number 
 */
function addition(num1, num2){
  return (num1 + num2);
}

/** This method perfroms subtraction between two numbers
 * 
 * @param     num1        Some particular number
 * @param     num2        Some particular number 
 */
function subtraction(num1, num2){
   return (num1 - num2);
}

/** This method perfroms multiplication between two numbers
 * 
 * @param     num1        Some particular number
 * @param     num2        Some particular number 
 */
function multiplication(num1, num2){
   return (num1 * num2);
}

/** This method perfroms division between two numbers
 * 
 * @param     num1        Some particular number
 * @param     num2        Some particular number 
 */
function division(num1, num2){
   return (num1 / num2);
}
