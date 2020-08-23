var words = ["lion",
"fish",
"elephant",
"tiger"];
var word = words[Math.floor(Math.random() * words.length)];

var AnswerArray = [];
for (var i = 0; i < word.length; i++) {
	AnswerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
	alert(AnswerArray.join(""));
	var guess = prompt("Guess a letter or click Cancel to stop the game");
	if (guess === null) {break};
	else if(guess.length !== 1) {
		alert("Please enter a single letter");
	} else {
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				AnswerArray[j] = guess;
				remainingLetters--;
			}
		}
	}

}

alert(AnswerArray.join(""));
alert("Good job!");
