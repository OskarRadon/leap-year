// function to calculate leap year
var leapYear = function(year) {
  return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
}


$ (document).ready(function () {
  $ ("#yearForm").submit(function(event) {
    var input = parseInt($("input#inputLeapYear").val());
    var result = leapYear(input);

    $(".year").text(input);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }



    $("#output").show();
    event.preventDefault();
  });
});



// function to calculate leap year

// var leapYear = function(year) {
//   return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
// };
