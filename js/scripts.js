$(function(){
  var year;
  $("form").submit(function(event){

    event.preventDefault();
    

    if($("input").val()){
      year = parseInt($("input").val());

      $(".year").text(year);
    } else {
      alert("Enter something");
    }




  });


});
