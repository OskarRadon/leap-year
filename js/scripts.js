$ (document).ready(function () {
  $ ("#yearForm").submit(function(event) {
    var year = $("input#inputLeapYear").val();

    // function to calculate leap year
    var leapYear = function(year) {
      return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    };
    //
    // console.log (leapYear(year));
    $("#output").append(leapYear(year));

    event.preventDefault();
  });
});



// function to calculate leap year

// var leapYear = function(year) {
//   return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
// };
