var trivia = new TriviaWordSearch();

$(document).ready(function(){

  $('#instButton').on('click', function(){
    $('#instructions').toggleClass('hidden');
  });

  $('#startButton').on('click', wrapper);
  function wrapper(){
    $('#instButton').addClass('hidden');
    $('#next').toggleClass("active");
    $('#startButton').toggleClass("active");
    $('#countryList').toggleClass("active");
    $('td').addClass("hover");
    trivia.createGrid();
    trivia.storeAnswer();
    trivia.createQuestionElement();

  if ($('#timer_div').attr("class") === "active"){
      trivia.timer();
      $('#timer_div').toggleClass("active");
  }


  else {
      console.log("addSencondsToTimer");
      trivia.addSecondstoTimer();
    }

  }

  $('#next').on('click',function(){
    trivia.checkAnswer();

  });

$('#PlayAgainButton').on('click', function(){
  $('#next').toggleClass("active");
  $('#lostGame').toggleClass("hidden");
  $('#countryList').toggleClass("active");
  $('td').addClass("hover");
  trivia.createGrid();
  trivia.storeAnswer();
  trivia.createQuestionElement();

if ($('#timer_div').attr("class") === "active"){
    trivia.timer();
    $('#timer_div').toggleClass("active");
}


else {
    console.log("addSencondsToTimer");
    trivia.addSecondstoTimer();
  }

});

$('#PlayAgainWin').on('click', function(){
  $('instButton').toggleClass('hidden');
  $('#next').toggleClass("active");
  $('#winGame').toggleClass("hidden");
  $('#countryList').toggleClass("active");
  $('td').addClass("hover");
  trivia.createGrid();
  trivia.storeAnswer();
  trivia.createQuestionElement();
  trivia.timer();
  $('#timer_div').toggleClass("active");
});




});
