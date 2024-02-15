//  hide function
function hide(elementId) {
  const getElementId = document.querySelector(`#${elementId}`);
  getElementId.classList.add("hidden");
}

// show function
function show(elementId) {
  const getElementId = document.querySelector(`#${elementId}`);
  getElementId.classList.remove("hidden");
}
// random alphabet genaret function
function randomAlphabetGenarate() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz/";
  const alphabetArr = alphabet.split("");
  const randomInd = Math.floor(Math.random() * alphabetArr.length);
  const randomAlphabetValue = alphabetArr[randomInd];
  return randomAlphabetValue;
}
// set random alphabet value function
function setAlphabetValue(AlphabetId, randomAlphabetValue) {
  const currentAlphabetId = document.querySelector(`#${AlphabetId}`);
  currentAlphabetId.innerText = randomAlphabetValue;
  return currentAlphabetId;
}
// set current alphavet bg function
function setCurrentAlphabetBg(elementId) {
  const currentAlphabetIdBg = document.querySelector(`#${elementId}`);
  currentAlphabetIdBg.classList.add("bg-yellow-500", "text-green-800");
}
// remove current alphavet bg function
function removeCurrentAlphabetBg(elementId) {
  const currentAlphabetIdBg = document.querySelector(`#${elementId}`);
  currentAlphabetIdBg.classList.remove("bg-yellow-500", "text-green-800");
}
// score up function
function scoreUp(scoreUpId) {
  const scoreUpBtn = document.querySelector(`#${scoreUpId}`);
  const scoreValue = scoreUpBtn.innerText;
  const scoreNum = parseInt(scoreValue);
  const scoreUp = scoreNum + 1;
  const finalScore = (scoreUpBtn.innerText = scoreUp);
  return finalScore;
}

// score down function
function lifeDown(lifeDownId) {
  const lifeDownBtn = document.getElementById(lifeDownId);
  const lifeDownValue = lifeDownBtn.innerText;
  const lifeDownNum = parseInt(lifeDownValue);
  const lifeDown = lifeDownNum - 1;
  const finalLifeDown = (lifeDownBtn.innerText = lifeDown);
  if (finalLifeDown === 0) {
    hide("play-ground");
    show("score-screen");
    const finalScoreValue = document.getElementById("score-up").innerText;
    setFinalScore("final-score-value", finalScoreValue);
  } else {
    return finalLifeDown;
  }
}

// set final score value function
function setFinalScore(finalScoreId, setFinalScoreValue) {
  const finalScoreBtn = document.getElementById(finalScoreId);
  finalScoreBtn.innerText = setFinalScoreValue;
}
