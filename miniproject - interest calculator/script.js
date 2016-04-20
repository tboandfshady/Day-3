//EVENT LISTENER LOOKING FOR BUTTON TO BE CLICKED 
var event1 = document.getElementById("button1");
    event1.addEventListener('click',checkguess,false);
   
//FUNCTION CALLED COMPUTE LOAN
function computeLoan(){
	
//VARIABLES INSIDE THE FUNCTION TAKING INPUT FROM THE 3 USER INPUTS
	var amount = document.getElementById('loanamount').value;
	var interest_rate = document.getElementById('interestamount').value;
	var months = document.getElementById('loanlength').value;
	
// MATHS I AM YET TO UNDERSTAND!
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	
// SENDS THE AMOUNT CALCULATED BACK TO THE DOM
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}


// SENDS INFORMATION BACK TO THE DOM
 document.getElementById("result").innerHTML = result;