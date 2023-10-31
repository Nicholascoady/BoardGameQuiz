// Board Game Quiz

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Variables
  let q1 = document.getElementById("Q1").value.toLowerCase();
  let q2 = document.getElementById("Q2").value;
  let q3 = document.getElementById("Q3").value;
  let q4 = document.getElementById("Q4").value;
  let q5 = document.getElementById("Q5").value.toLowerCase();

  //  Score Variables
  let numS = 0;

  // Binary Answers

  if (q1 === "catan") {
    document.getElementById("A1").innerHTML = `Correct`;
    numS = numS + 1;
    document.getElementById("A1").style.color = `green`;
    document.getElementById("Q1").style.border = `2px solid green`;
  } else {
    document.getElementById("A1").innerHTML = `Incorrect`;
    document.getElementById("A1").style.color = `red`;
    document.getElementById("Q1").style.border = `2px solid red`;
  }

  if (q2 === "150") {
    document.getElementById("A2").innerHTML = `Correct`;
    numS = numS + 1;
    document.getElementById("A2").style.color = `green`;
    document.getElementById("Q2").style.border = `2px solid green`;
  } else {
    document.getElementById("A2").innerHTML = `Incorrect`;
    document.getElementById("A2").style.color = `red`;
    document.getElementById("Q2").style.border = `2px solid red`;
  }

  if (q3 === "54" || q3 === "52") {
    document.getElementById("A3").innerHTML = `Correct`;
    numS = numS + 1;
    document.getElementById("A3").style.color = `green`;
    document.getElementById("Q3").style.border = `2px solid green`;
  } else {
    document.getElementById("A3").innerHTML = `Incorrect`;
    document.getElementById("A3").style.color = `red`;
    document.getElementById("Q3").style.border = `2px solid red`;
  }

  if (q4 === "54") {
    document.getElementById("A4").innerHTML = `Correct`;
    numS = numS + 1;
    document.getElementById("A4").style.color = `green`;
    document.getElementById("Q4").style.border = `2px solid green`;
  } else {
    document.getElementById("A4").innerHTML = `Incorrect`;
    document.getElementById("A4").style.color = `red`;
    document.getElementById("Q4").style.border = `2px solid red`;
  }

  if (q5 === "the thing") {
    document.getElementById("A5").innerHTML = `Correct`;
    numS = numS + 1;
    document.getElementById("A5").style.color = `green`;
    document.getElementById("Q5").style.border = `2px solid green`;
  } else {
    document.getElementById("A5").innerHTML = `Incorrect`;
    document.getElementById("A5").style.color = `red`;
    document.getElementById("Q5").style.border = `2px solid red`;
  }

  // Score / Feedback code
  document.getElementById("number").innerHTML = `Your Score: ${numS}/5`;

  document.getElementById("%").innerHTML = `(${(numS / 5) * 100}) %`;

  let feedB = numS;

  if (feedB === 0) {
    document.getElementById("feedBack").innerHTML = `You Suck!`;
  } else if (feedB === 1) {
    document.getElementById("feedBack").innerHTML = `Ehh`;
  } else if (feedB === 2) {
    document.getElementById("feedBack").innerHTML = `That was ok.`;
  } else if (feedB === 3) {
    document.getElementById("feedBack").innerHTML = `Good`;
  } else if (feedB === 4) {
    document.getElementById("feedBack").innerHTML = `Great`;
  } else {
    document.getElementById("feedBack").innerHTML = `Perfect`;
  }
}
