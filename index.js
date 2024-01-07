// Display the current day at the top of the calender when a user opens the planner.
var currentTime = dayjs().format("DD/MM/YYYY");
document.getElementById("currentDay").textContent = currentTime;


// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function updateColour(){
    let currentTime = dayjs().hour();

    $(".time-block").each(function(){
        let apptTime = parseInt($(this).attr("id"));
        console.log("apptTime=", apptTime);  
   

if(apptTime < currentTime){
    $(this).addClass("past");
} else if(apptTime === currentTime){
    $(this).addClass("present");
    $(this).removeClass("past");

} else{
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
}
});
}

updateColour();

// Allow a user to enter an event when they click a timeblock and save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on("click", function(){
let text = $(this).siblings(".description").val();
console.log("text=", text);
let hour = $(this).parent().attr("id");
console.log("hour=", hour);

localStorage.setItem(hour, text);
});

// Persist events between refreshes of a page
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));