
var dateDisplayEl = $('#date-display');



function displayDate() {
  var rightNow = dayjs().format('MMM DD, YYYY; hh:mm:ss');
  dateDisplayEl.text(rightNow);
};


$(document).ready(function() {

  var saveButtonEl = $('.saveBtn');

  
  saveButtonEl.on('click', function (event) {
    var storage = $('.time-block').val;
    console.log('saveButton');
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(value, time);
    localStorage.setItem(time, value);
  });
  
  
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    var currentHour = dayjs().hour();
    console.log(currentHour);
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});

displayDate();