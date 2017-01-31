var trivia = new TriviaWordSearch();

$(document).ready(function(){
  $('button').on('click', wrapper);
  function wrapper(){
    trivia.createGrid();
    if ($('#timer_div').attr("class") === "active"){
      trivia.timer();
      $('#timer_div').toggleClass("active");
  }
    else {
      trivia.addSecondstoTimer();
    }
  }
});
