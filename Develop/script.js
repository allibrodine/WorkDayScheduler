//display current day/time
var rightNow = document.querySelector('#currentDay');
var now = moment().format('MMMM Do YYYY hh:mm a');
    rightNow.textContent = now;


//style text area so passed time is in gray, current is red, future is green
$(".hour").each(function() {
    //var timeCheck = 

    if (now == timeCheck) {
        $(this).addClass("present");
    } else if (now < timeCheck) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (now > timeCheck) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});



//handle save button, add content to localStorage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var time = $(this).siblings(".hour").text();
    var value = $(this).siblings(".description").val();

    localStorage.setItem(time, value);
    
});