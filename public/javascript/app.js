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