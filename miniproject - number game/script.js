//EVENT LISTENER LOOKING FOR BUTTON TO BE CLICKED 
var event1 = document.getElementById("button1");
    event1.addEventListener('click',checkguess,false);
   
//RANDOM NUMBER BETWEEN 1-100 STORED TO VARIABLE
var randomnum = Math.floor((Math.random() * 100) + 1);



//INITIALISE (START THE COUNTER FROM ZERO) VARIABLE SET TO ZERO
var countClicks = 0;

//FUNCTION TO CARRY OUT THE GAME
function checkguess() {         

// USER GUESS TAKEN FROM TEXT BOX, CONVERTED FROM A STRING AND STORED TO VAR
var userguess = parseInt(document.getElementById("input1").value);
	
// IF THE GUESS IS BIGGER 
	if (userguess > randomnum) {
	
//COUNT CLICKS VARIABLE CALLED ON AND ADDS +1  
		    countClicks++;
// RESULT 
           result = "Your guess of " + userguess + " is higher than the magic number. <br >You have had </b> " + countClicks + " </b>guesses so far.";
		  
       } 
		else if (userguess < randomnum) {
			 countClicks++;
           result ="Your guess of " + userguess + " is lower than the magic number. <br >You have had </b> " + countClicks + " </b>guesses so far.";
		  
       }  
		else {
			countClicks++;
           result = "Success, You win! You took </b> " + countClicks + " </b>guesses.";
			
       } 
// SENDS THE RESULT TO THE DOM
	  document.getElementById("result").innerHTML = result;
	
} //END OF FUNCTION - dont delete!







