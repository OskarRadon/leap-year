// function to calculate leap year
var leapYear = function(year) {
  return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
}


$ (document).ready(function () {
  $ ("#yearForm").submit(function(event) {
    var input = parseInt($("input#inputLeapYear").val());

    console.log(leapYear(input));
    $("#output").text(leapYear(input));

    event.preventDefault();
  });
});



// function to calculate leap year

// var leapYear = function(year) {
//   return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
// };
