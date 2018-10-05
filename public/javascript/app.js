var exoticFleet = [{
    name: 'LAMBORGHINI AVENTADOR CONVERTIBLE',
    msrp: 450000,
    engine: 700,
    speed: 2.6,
    transmission: 'F1',
    image: 'lamborghini.jpg'
},
{
    name: 'LAMBORGHINI HURACAN AVIO',
    msrp: 320000,
    engine: 602,
    speed: 2.6,
    transmission: 'F1',
    image: "avio.jpg"
},
{
    name: 'LAMBORGHINI HURACAN CONVERTIBLE',
    msrp: 220000,
    engine: 602,
    speed: 2.6,
    transmission: 'F1',
    image: "huracan-convertible.jpg"
}, {
    name: 'BENTLEY CONTINENTAL GT CONVERTIBLE',
    msrp: 264000,
    engine: 500,
    speed: 2.6,
    transmission: 'Automatic',
    image: "bentley.jpg"
}, {
    name: 'MCLAREN 720S',
    msrp: 340000,
    engine: 710,
    speed: 2.6,
    transmission: 'F1',
    image: "mclaren.jpg"
}, {
    name: 'FERRARI ITALIA 458',
    msrp: 313000,
    engine: 570,
    speed: 2.6,
    transmission: 'F1',
    image: "458.jpg"
}

];

var suvFleet = [{
    name: 'MERCEDES-BENZ G63 BRABUS',
    msrp: 229000,
    engine: 850,
    speed: 4.5,
    transmission: 'Automatic'
},
{
    name: 'LAND ROVER RANGE ROVER',
    msrp: 234000,
    engine: 575,
    speed: 4.5,
    transmission: 'Automatic',
    image: 'Range-Rover-Sport.jpg'
}
];

var luxuryFleet = [{
    name: 'ROLLS ROYCE WRAITH',
    msrp: 462000,
    engine: 624,
    speed: 4.5,
    transmission: 'Automatic'
},
{
    name: 'ROLLS ROYCE GHOST',
    msrp: 347000,
    engine: 562,
    speed: 4.5,
    transmission: 'Automatic'
}

];

var sportFleet = [{
    name: 'AUDI R8',
    msrp: 220000,
    engine: 602,
    speed: 4.5,
    transmission: 'Automatic',
    image: 'R8.jpg'
},
{
    name: 'MERCEDES-BENZ S63',
    msrp: 160000,
    engine: 603,
    speed: 4.5,
    transmission: 'Automatic'
}, {
    name: 'BMW M235 CONVERTIBLE',
    msrp: 80000,
    engine: 320,
    speed: 4.5,
    transmission: 'Automatic'
}
]
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });