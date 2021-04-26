// user moment to retrieve date in required format and display to page.
var currentDay = $('#currentDay');
var getTheDate = moment();
currentDay.text(getTheDate.format("dddd, MMMM Do YYYY, h:mm a"));

// use jquery to assign text area ID's to variables
var textArea9 = $('#9');
var textArea10 = $('#10');
var textArea11 = $('#11');
var textArea12 = $('#12');
var textArea13 = $('#13');
var textArea14 = $('#14');
var textArea15 = $('#15');
var textArea16 = $('#16');
var textArea17 = $('#17');

// use jquery to assign button ID's to variables
var button9 = $('#button9');
var button10 = $('#button10');
var button11 = $('#button11');
var button12 = $('#button12');
var button13 = $('#button13');
var button14 = $('#button14');
var button15 = $('#button15');
var button16 = $('#button16');
var button17 = $('#button17');

// button9.addEventListener("click",saveTextArea9);

button9.on('click', function () {
    var textArea9Value = textArea9.value
    console.log(textArea9Value)
    localStorage.setItem("textArea9Value",textArea9Value)
});

function saveTextArea9(){
    var textArea9Value = textArea9.textArea9.value
    console.log(textArea9Value)
    localStorage.setItem("textArea9Value",textArea9Value)
}