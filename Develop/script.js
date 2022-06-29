//display current day/time
var rightNow = document.querySelector('#currentDay');
var now = moment().format('MMMM Do YYYY hh:mm a');
    rightNow.textContent = now;
var hour = moment().hour();

//console.log(localStorage.getItem("10AM"));

//style text area so passed time is in gray, current is red, future is green
var timeColor = function() {
    $(".time-block").each(function() {
        var timeCheck = $(this).attr("id"); 
            //console.log(this);

        if (hour == timeCheck) {
            $(this).addClass("present");
        } else if (hour < timeCheck) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (hour > timeCheck) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });
};


//handle save button, add content to localStorage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text); 
});

//saved events persist...check each container for content, display content upon reload
var showText = function () {
    
    for (var i = 9; i < 18; i++) {
        var el = $(`#${i}`);
        var text = el[0].children[1]; 
        var store = localStorage.getItem(`${el[0].children[0].innerText}`);
        text.value = store;
    } 
};

showText();
timeColor();
