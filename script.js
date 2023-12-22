const display = document.querySelector("#message");
let btn = document.querySelector("#btn");
let guess = document.querySelector("#guess");

// generating a random number between 1 and 100

const randomNumber = Math.floor(Math.random() * 10) + 1;
let i = 0;
// Creating the onsubmit event
btn.addEventListener("click", () => {
  i++;
  const guessValue = parseInt(guess.value);

  // checking if maximum number of guesses reached
  if (i === 3) {
    display.innerHTML = "Game Over";
    guess.disabled = true; // disable the input field after maximum guesses reached
    btn.disabled = true; // disable the button after maximum guesses reached
    return; // exit the event handler function
  }

  // checking for correct guess
  if (guessValue > randomNumber) {
    display.innerHTML = "Too high!";
    guess.value = "";
  } else if (guessValue < randomNumber) {
    display.innerHTML = "Too low!";
    guess.value = "";
  } else if (guessValue === randomNumber) {
    display.innerHTML = "You got it right!";
    guess.value = "";
  }
});
