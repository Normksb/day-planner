var currentDay = $('#currentDay');
var getTheDate = moment();
currentDay.text(getTheDate.format("dddd, MMMM Do YYYY, h:mm a"))