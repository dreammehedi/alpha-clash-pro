// play now function
function playNow() {
  hide("home-screen");
  show("play-ground");
  randomAlphabetCreateAndSet();
  document.addEventListener("keyup", whatKeyPressedUser);
}
// random alphabet create and set
function randomAlphabetCreateAndSet() {
  const randomValue = randomAlphabetGenarate();
  setAlphabetValue("current-alphabet", randomValue);
  if (randomValue === "/") {
    setCurrentAlphabetBg("slash");
  } else {
    setCurrentAlphabetBg(randomValue);
  }
}

// crate what alphabet press user
function whatKeyPressedUser(event) {
  // find user what alphabat press
  const pressKbd = event.key;
  // user presss esc to show final score page
  if (pressKbd === "Escape") {
    hide("play-ground");
    show("score-screen");
    const finalScoreValue = document.getElementById("score-up").innerText;
    setFinalScore("final-score-value", finalScoreValue);
  }
  // finde current alphabate
  const currentAlphabetId = document.querySelector("#current-alphabet");
  const currentAlphabetValue = currentAlphabetId.innerText;
  const lowerCurrentAlphabetValue = currentAlphabetValue.toLowerCase();
  if (pressKbd === lowerCurrentAlphabetValue) {
    if (currentAlphabetValue === "/") {
      removeCurrentAlphabetBg("slash");
    } else {
      removeCurrentAlphabetBg(lowerCurrentAlphabetValue);
    }
    randomAlphabetCreateAndSet();
    scoreUp("score-up");
  } else {
    lifeDown("life-down");
  }
}
// play again function
function playAgain() {
  hide("score-screen");
  show("play-ground");
  // score value 0
  const scoreUp = document.getElementById("score-up");
  scoreUp.innerText = 0;
  // life set 5
  const scoreDown = document.getElementById("life-down");
  scoreDown.innerText = 5;
}
