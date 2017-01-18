$(function(){


  $("form").submit(function(event){

    event.preventDefault();
    var year = parseInt($("input").val());
    var today = new Date();
    today = today.getFullYear();

    if (year < today) {
      $(".tense").text("was ")
    } else if (year > today) {
      $(".tense").text("will be ")
    } else {
      $(".tense").text("is ")
    }

    if($("input").val() && year){
      $("#year_output").show();
      $(".year").text(year);

      if (year % 4 === 0 && year % 100 !== 0 ) {
        $(".check").text("");

      } else if (year % 400 === 0) {
        $(".check").text("");
      } else if(year > today) {
        $(".tense").text("will ");
        $(".check").text("not be ");
      } else {
        $(".check").text("not ");
      }
    } else {
      alert("Enter a valid year.");
    }
  });
});
