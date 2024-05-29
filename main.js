// Make Your Own Quiz

document.getElementById("search-btn").addEventListener("click", btnClicked);

let answerEl = document.getElementById("answers-out");

function btnClicked() {
  let ans1 = document.getElementById("search-in1").value.toLowerCase();
  let ans2 = document.getElementById("search-in2").value.toLowerCase();
  let ans3 = document.getElementById("search-in3").value.toLowerCase();
  let ans4 = document.getElementById("search-in4").value.toLowerCase();
  let percentage = document.getElementById("percentage");
  let answersright = 0;

  if (ans1 == "12:00am - 5:00am") {
    document.getElementById("outcome1").innerHTML = `Correct`;
    answersright++;
    answerEl.innerHTML = answersright;
  } else {
    document.getElementById("outcome1").innerHTML = `Wrong`;
    answersright;
    answerEl.innerHTML = answersright;
  }

  if (ans2 == "change lanes") {
    document.getElementById("outcome2").innerHTML = `Correct`;
    answersright++;
    answerEl.innerHTML = answersright;
  } else {
    document.getElementById("outcome2").innerHTML = `Wrong`;
    answersright;
    answerEl.innerHTML = answersright;
  }

  if (ans3 == "two second") {
    document.getElementById("outcome3").innerHTML = `Correct`;
    answersright++;
    answerEl.innerHTML = answersright;
  } else {
    document.getElementById("outcome3").innerHTML = `Wrong`;
    answersright;
    answerEl.innerHTML = answersright;
  }

  if (ans4 == "keep right") {
    document.getElementById("outcome4").innerHTML = `Correct`;
    answersright++;
    answerEl.innerHTML = answersright;
  } else {
    document.getElementById("outcome4").innerHTML = `Wrong`;
    answersright;
    answerEl.innerHTML = answersright;
  }

  if (answersright < 0) {
    percentage.innerHTML = (answersright / 4) * 100;
  } else if (answersright > 0) {
    percentage.innerHTML = (answersright / 4) * 100;
  }else{ percentage.innerHTML = (answersright =0) * 100;}
}
