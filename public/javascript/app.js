$(document).ready(function () {
  M.AutoInit();
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
  $('input#input_text, textarea#textarea1').characterCounter();
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');
  $('.parallax').parallax();
  $('.slider').slider();
  $('.carousel').carousel();
  $('.modal').modal();
  $('.datepicker').datepicker();
  $('.timepicker').timepicker();
});

$("#submit-btn").on("click", function (event) {
  console.log("Data accepted")
  event.preventDefault();
  var newMessage = {
    firstName: $("#firstInput").val().trim(),
    lastName: $('#lastNameInput').val().trim(),
    phoneNumber: $("#phoneNumberInput").val().trim(),
    emailAdress: $("#emailInput").val().trim(),
    message: $("#messageInput").val().trim()

  };


  $.post("/api/contactus", newMessage)
    .then(function (data) {
      console.log("contact.handlebars", data);
      alert("Your Mesage has been Recevied!");
    });



  $("#firstInput").val("");
  $("#lastNameInput").val("");
  $("#phoneNumberInput").val("");
  $("#emailInput").val("");
  $("#messageInput").val("");





});