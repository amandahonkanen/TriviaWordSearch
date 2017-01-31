// var HistoryTriviaWordSearch = function(){
//   alaphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// };
var TriviaWordSearch = function(){
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.timeRemaining = 30;
    this.questions = [
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Brazil was once a colony of which European country?",
        answer: "Portugal",
        level: "2/10"
      },
      {
        question: "Event triggering US involvement in WWII?",
        answer: "Pearl Harbor",
        level: "3/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
      {
        question: "Which country was the first to aqcuire an atomic bomb?(abbreviation)",
        answer: "USA",
        level: "1/10"
      },
    ];
};


TriviaWordSearch.prototype.createGrid = function () {
  $('td').remove();
rows = [];
cols = null;
  for (var i=0; i <=8; i++){
    cols = "";
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
  // console.log(this.timeRemaining);
  // var seconds_left = this.timeRemaining;
  var self = this;

  var interval = setInterval(function() {

      document.getElementById('timer_div').innerHTML = self.timeRemaining--;

      if (self.timeRemaining <= 0)
      {
          
          clearInterval(interval);

      }


  }, 1000);

};

TriviaWordSearch.prototype.addSecondstoTimer = function(){
  var seconds_added = 10;
  this.timeRemaining = this.timeRemaining + seconds_added;

  // var interval = setInterval(function() {
  //
  //     document.getElementById('timer_div').innerHTML = --seconds_left;
  //
  //     if (seconds_left === 0)
  //     {
  //       clearInterval(interval);
  //
  //     }
  // }, 1000);

};
