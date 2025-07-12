let number = 40 ;
let guess = 0;

do
{
    guess = parseInt (prompt("Guess a number "))
    if(guess ==  number)
    {
        alert("Congratulations! You guessed the number");
        break;
    }
} while (guess != 0)