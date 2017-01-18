$(function(){
  var year;

  $("form").submit(function(event){

    event.preventDefault();
    year = parseInt($("input").val());

    if($("input").val() && year){

      $(".year").text(year);
    } else {
      alert("Enter a valid year.");
    }




  });


});
