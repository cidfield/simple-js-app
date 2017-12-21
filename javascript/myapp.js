

const Questions = function(question, answers, correctAnswer){
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
};

Questions.prototype.displayQuestion = function(){
  let header = document.querySelector('h2');
  header.textContent = this.question;
  let boxes = document.querySelectorAll('.box-green, .box-blue, .box-red');
  for(let i = 0; i < this.answers.length; i++){
    boxes[i].textContent = this.answers[i];
  }
};

let q1 = new Questions("What's you name?", ["Jonas", "Faisal", "Mike"], "box-blue");
let q2 = new Questions("Where are you from?", ["UAE", "Egypt", "Oman"], "box-red");
let q3 = new Questions("what's your dream car?", ["Mercedez", "BMW", "VW"], "box-green");

let qArray = [];
qArray.push(q1, q2, q3);
let n = 0;

qArray[n].displayQuestion();

document.addEventListener('click', function(e){
  if(qArray[n].correctAnswer === e.target.className){
    if(n < 2){
      console.log("correct");
      n++;
      qArray[n].displayQuestion();
    } else {
      console.log("That's it!");
      let header = document.querySelector('h2');
      header.textContent = "The End!";
      // header.style.textAlign = "center";
      let boxes = document.querySelectorAll('.box-green, .box-blue, .box-red');
      const changing = boxes.forEach(curr => {
        curr.style.display = "none";
      });
    }
  } else {
    console.log("Incorrect");
  }
});

// FUCK YOU 3TAY WA7D! ***A Lovley Message***
