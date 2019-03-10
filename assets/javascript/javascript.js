//Step 1: Define The words available to guess from in the game

var randomWordarr = ["Pizza", "Cheese", "Burger", "Sushi", "Coffee", "Soda", "Lettuce","Food","death"] 

//Step 2: Function to randomly choose a word from our list

var randomWord = randomWordarr[Math.floor(Math.random() * randomWordarr.length)]

//Step 3: Global variables
var s;
var count = 0

//Step 4: Store the guesses in an empty array
var answerarray = [];

//Fill answer array with under scores that match the letter in the randomly chosen word
function startUp()
{
    for (var i = 0; i < randomWord.length; i++)
    (
        answerarray[i] = "_");

//String
s = answerarray.join(" ");
document.getElementById("answer").innerHTML = s;
    }

//Get letter that user typed    
function Letter()
{
    var Letter = document.getElementById("letter").nodeValue;

    if(Letter.length > 0)
    {
        for (var i = 0; i < randomWord.length; i++)
    {
     
        //If user types letter contained in word, assing
        if(randomWord[i] = Letter)
        {
        answerarray[i] = Letter;
    }
    }
  //number of guesses 
    count++;
   document.getElementById("counter").innerHTML = "Number of clicks: " + count;
   document.getElementById("Answer").innerHTML = answerArray.join(" ");
}

//Annoy User
if(count>5)
{
    document.getElementById("stat").innerHTML = "you suck, anyone would have guessed it by now!";
}
}
