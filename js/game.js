
var TriviaWordSearch = function(){
    this.timeRemaining = 30;
    this.currentQuestion = 0;
    this.playerAnswer = '';
    this.questionContainer = $('#questionContainer');
    this.currentLetter = undefined;
    this.previousLetter = undefined;
    this.gameOver = false;
    this.questions = [
      {
        question: "Which country has the most people behind bars?",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country has the most overweight population?",
        answer: "NAURU",
        level: "2/10"
      },
      {
        question: "Which country covers the most time zones? Including oversees territories.",
        answer: "FRANCE",
        level: "3/10"
      },
      {
        question: "Which country has the most lakes in the world?",
        answer: "CANADA",
        level: "4/10"
      },
      {
        question: "Which country produces the most oxygen?",
        answer: "RUSSIA",
        level: "5/10"
      },
      {
        question: "Which country is the largest country with no farms?",
        answer: "SINGAPORE",
        level: "6/10"
      },
      {
        question: "All of the pandas in the world are on loan from this country. ",
        answer: "CHINA",
        level: "7/10"
      },
      {
        question: "Which country is smaller in area than Central Park in New York City?",
        answer: "MONACO",
        level: "8/10"
      },
      {
        question: "Which country has more of it's people living abroad?",
        answer: "MALTA",
        level: "9/10"
      },
      {
        question: "Which country has the least densly populated population?",
        answer: "MONGOLIA",
        level: "10/10"
      },
    ];
};



TriviaWordSearch.prototype.createGrid = function () {
  $('td').remove();
rows = [];
cols = null;
  for (var i=0; i <=8; i++){
    cols = "";
    var alphabet = 'USANAURUFRANCECANADASINGAPOREMALTAMONGOLIARUSSIAMONACOCHINAPPDTTGGF';
    for(var h=0; h <= 8; h++){
      var random = parseInt(Math.random()* alphabet.length);
        var letter = alphabet.charAt(random);
        var cell = '<td>' + letter + '</td>';
        cols += cell;
    }
     rows.push('<tr>' + cols + '</tr>');
  }
  document.getElementById('letterBox').innerHTML += rows.join("");
};



TriviaWordSearch.prototype.timer = function () {
  var self = this;
  self.interval = setInterval(function() {
      document.getElementById('timer_div').innerHTML = self.timeRemaining--;
      if (self.timeRemaining < 0)
      {
        trivia.resetLose();
        clearInterval(self.interval);

      }
  }, 1000);
};




TriviaWordSearch.prototype.addSecondstoTimer = function(){
  var seconds_added = 10;
  this.timeRemaining = this.timeRemaining + seconds_added;
};



TriviaWordSearch.prototype.createQuestionElement = function(){

  $('#question').append(this.questions[this.currentQuestion].question);

};


TriviaWordSearch.prototype.storeAnswer = function() {
  var self = this;

  $("td").click(function(){
    console.log("this: ", this);
    if($(this).hasClass('chosen')){
      var letter = $(this).html();
      var arr = self.playerAnswer.split("");
      var index = arr.indexOf(letter);
      arr.splice(index, 1);
      self.playerAnswer = arr.join("");
      console.log(self.playerAnswer);
      $(this).toggleClass("chosen");
    } else {
      self.playerAnswer += ($(this).html());

      $(this).toggleClass("chosen");

    }
// $('#playerAnswer').append(self.playerAnswer).html();
  });

};


TriviaWordSearch.prototype.checkAnswer = function(){
  if(this.playerAnswer === this.questions[this.currentQuestion].answer){
    $('#' + (this.currentQuestion + 1) + '').addClass('found');
    this.nextQuestion();
    this.addSecondstoTimer();
  }
  else {
    console.log("cleaning playerAnswer");
    this.playerAnswer = '';
    this.createGrid();
    this.storeAnswer();

  }
};


TriviaWordSearch.prototype.nextQuestion = function(){
  $('#question').text('');
    this.currentQuestion += 1;
    if(this.currentQuestion < this.questions.length){

      $('#question').text(this.questions[this.currentQuestion].question);
      this.createGrid();
      this.storeAnswer();
      this.checkAnswer();
  }
  else {
    trivia.resetWin();



  }
};

TriviaWordSearch.prototype.resetLose = function(){
  this.currentQuestion = 0;
  this.playerAnswer = '';
  this.timeRemaining = 30;
  $('td').remove();
  $('#question').text('');
  $('#countryList').toggleClass("active");
  $('#next').toggleClass("active");
  // $('#startButton').toggleClass("active");
  $('#timer_div').toggleClass("active");
  $('#lostGame').toggleClass("hidden");
  $('*').removeClass('found');


  console.log("RESET");
};

TriviaWordSearch.prototype.resetWin = function(){
  console.log('hello reset');
  this.currentQuestion = 0;
  this.playerAnswer = '';
  this.timeRemaining = 20;
  clearInterval(this.interval);
  $('td').remove();
  $('#question').text('');
  $('#countryList').toggleClass("active");
  $('#next').toggleClass("active");
  // $('#startButton').toggleClass("active");
  $('#timer_div').toggleClass("active");
  $('#winGame').toggleClass("hidden");
  $('*').removeClass('found');


  console.log("RESET");
};
