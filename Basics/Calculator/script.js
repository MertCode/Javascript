/* 
This code defines a function called calculate that does the following:

It retrieves the values of two input fields with the IDs 'number1' and 'number2'.
It converts the retrieved values to integers using parseInt.
It declares a variable called result.
It retrieves an element with the ID 'result' and assigns it to a variable called resultview.
It adds the values of number1 and number2 and assigns the result to result.
It logs the value of result to the console.
It sets the innerHTML of resultview to the value of result. */
function calculate () {
   let number1 = parseInt(document.getElementById('number1').value);
   let number2 = parseInt(document.getElementById('number2').value);
   let result;
   let resultview = document.getElementById('result');

   result = number1 + number2;
   console.log(result);
   // remove the result div
   resultview.classList.remove('d-none');
   resultview.innerHTML = result;
}